import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PcmtCoDetail } from './entities/pcmt-co-detail.entity';
import { CreatePcmtCoDetailDto } from './dto/create-pcmt-co-detail.dto';
import { UpdatePcmtCoDetailDto } from './dto/update-pcmt-co-detail.dto';

@Injectable()
export class PcmtCoDetailService {
  constructor(
    @InjectRepository(PcmtCoDetail)
    private pcmtCoDetailRepository: Repository<PcmtCoDetail>,
  ) {}

  async findAll(): Promise<PcmtCoDetail[]> {
    return await this.pcmtCoDetailRepository.find();
  }

  async findOne(id: number): Promise<PcmtCoDetail> {
    return await this.pcmtCoDetailRepository.findOne({ where: { id } });
  }

  async create(dto: CreatePcmtCoDetailDto): Promise<PcmtCoDetail> {
    const pcmtCoDetail = this.pcmtCoDetailRepository.create(dto);
    return await this.pcmtCoDetailRepository.save(pcmtCoDetail);
  }

  async update(id: number, dto: UpdatePcmtCoDetailDto): Promise<PcmtCoDetail> {
    const result = await this.pcmtCoDetailRepository.update(id, dto);

    if (result.affected) return this.findOne(id);

    throw new NotFoundException(`PCMT Master with id ${id} not found`);
  }

  async remove(id: number): Promise<PcmtCoDetail> {
    const result = await this.pcmtCoDetailRepository.delete(id);

    if (result.affected) return this.findOne(id);

    throw new NotFoundException(`PCMT Master with id ${id} not found`);
  }
}
