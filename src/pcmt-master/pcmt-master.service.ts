import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PcmtMaster } from './entities/pcmt-master.entity';
import { CreatePcmtMasterDto } from './dto/create-pcmt-master.dto';
import { UpdatePcmtMasterDto } from './dto/update-pcmt-master.dto';

@Injectable()
export class PcmtMasterService {
  constructor(
    @InjectRepository(PcmtMaster)
    private pcmtMasterRepository: Repository<PcmtMaster>,
  ) {}

  async findAll(): Promise<PcmtMaster[]> {
    return await this.pcmtMasterRepository.find();
  }

  async findOne(id: number): Promise<PcmtMaster> {
    return await this.pcmtMasterRepository.findOneBy({ id });
  }

  async create(dto: CreatePcmtMasterDto): Promise<PcmtMaster> {
    const pcmtMaster = this.pcmtMasterRepository.create(dto);
    return await this.pcmtMasterRepository.save(pcmtMaster);
  }

  async update(id: number, dto: UpdatePcmtMasterDto): Promise<PcmtMaster> {
    const result = await this.pcmtMasterRepository.update(id, dto);

    if (result.affected) return this.findOne(id);

    throw new NotFoundException(`PCMT Master with id ${id} not found`);
  }

  async remove(id: number): Promise<PcmtMaster> {
    const result = await this.pcmtMasterRepository.delete(id);

    if (result.affected) return this.findOne(id);

    throw new NotFoundException(`PCMT Master with id ${id} not found`);
  }
}
