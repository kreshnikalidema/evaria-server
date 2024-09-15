import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CoDetail } from './entities/co-detail.entity';
import { CreateCoDetailDto } from './dto/create-co-detail.dto';
import { UpdateCoDetailDto } from './dto/update-co-detail.dto';

@Injectable()
export class CoDetailService {
  constructor(
    @InjectRepository(CoDetail)
    private coDetailRepository: Repository<CoDetail>,
  ) {}

  async findAll(): Promise<CoDetail[]> {
    return await this.coDetailRepository.find();
  }

  async findOne(id: number): Promise<CoDetail> {
    return await this.coDetailRepository.findOneOrFail({
      where: { id },
      relations: ['project'],
    });
  }

  async create(dto: CreateCoDetailDto): Promise<CoDetail> {
    const coDetail = this.coDetailRepository.create(dto);
    return await this.coDetailRepository.save(coDetail);
  }

  async update(id: number, dto: UpdateCoDetailDto): Promise<CoDetail> {
    await this.coDetailRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<CoDetail> {
    const coDetail = await this.findOne(id);

    await this.coDetailRepository.remove(coDetail);

    return coDetail;
  }
}
