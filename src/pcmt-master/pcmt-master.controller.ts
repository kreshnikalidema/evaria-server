import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PcmtMasterService } from './pcmt-master.service';
import { CreatePcmtMasterDto } from './dto/create-pcmt-master.dto';
import { UpdatePcmtMasterDto } from './dto/update-pcmt-master.dto';

@Controller('pcmt-master')
export class PcmtMasterController {
  constructor(private readonly pcmtMasterService: PcmtMasterService) {}

  @Get()
  findAll() {
    return this.pcmtMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pcmtMasterService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreatePcmtMasterDto) {
    return this.pcmtMasterService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePcmtMasterDto) {
    return this.pcmtMasterService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcmtMasterService.remove(+id);
  }
}
