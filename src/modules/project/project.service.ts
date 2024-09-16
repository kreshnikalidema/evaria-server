import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  Pagination,
  PaginationParams,
  PaginationResponse,
} from '@/helpers/pagination';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private readonly eventEmitter: EventEmitter2,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(
    params: PaginationParams<Project>,
    currentUser: string,
  ): Promise<PaginationResponse<Project>> {
    const options = Pagination.getOptions<Project>(params);

    const [rows, count] = await this.projectRepository.findAndCount(options);

    const items = rows.map((row) =>
      Object.assign({}, row, { hasPermission: row.userInsert === currentUser }),
    ) as unknown as Project[];

    return Pagination.getResponse(items, count, options);
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOneOrFail({
      where: { id },
      relations: ['coDetails', 'attachments'],
    });
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const project = this.projectRepository.create(dto);

      const savedProject = await queryRunner.manager.save(project);

      await queryRunner.commitTransaction();

      this.eventEmitter.emit('project.created', savedProject);

      return savedProject;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: number, dto: UpdateProjectDto): Promise<Project> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const project = await this.findOne(id);

      Object.assign(project, dto);

      const savedProject = await queryRunner.manager.save(project);

      await queryRunner.commitTransaction();

      this.eventEmitter.emit('project.updated', savedProject);

      return savedProject;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number): Promise<Project> {
    const project = await this.findOne(id);

    await this.projectRepository.remove(project);

    this.eventEmitter.emit('project.removed', project);

    return project;
  }
}
