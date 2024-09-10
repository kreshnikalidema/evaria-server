import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PcmtMaster } from './entities/pcmt-master.entity';
import { CreatePcmtMasterDto } from './dto/create-pcmt-master.dto';
import { UpdatePcmtMasterDto } from './dto/update-pcmt-master.dto';

@Injectable()
export class PcmtMasterService {
  constructor(
    @InjectRepository(PcmtMaster)
    private readonly pcmtMasterRepository: Repository<PcmtMaster>,

    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<PcmtMaster[]> {
    return await this.pcmtMasterRepository.find();
  }

  async findOne(id: number): Promise<PcmtMaster> {
    return await this.pcmtMasterRepository.findOne({
      where: { id },
      relations: ['coDetails'],
    });
  }

  async create(dto: CreatePcmtMasterDto): Promise<PcmtMaster> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const pcmtMaster = this.pcmtMasterRepository.create(dto);
      const savedPcmtMaster = await queryRunner.manager.save(pcmtMaster);

      await queryRunner.commitTransaction();
      return savedPcmtMaster;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: number, dto: UpdatePcmtMasterDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const pcmtMaster = await this.findOne(id);

      if (!pcmtMaster) {
        throw new NotFoundException('PcmtMaster not found');
      }

      Object.assign(pcmtMaster, dto);
      await queryRunner.manager.save(pcmtMaster);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number): Promise<PcmtMaster> {
    const pcmtMaster = await this.findOne(id);

    if (!pcmtMaster) {
      throw new NotFoundException(`PCMT Master with id ${id} not found`);
    }

    await this.pcmtMasterRepository.remove(pcmtMaster);

    return pcmtMaster;
  }
}
