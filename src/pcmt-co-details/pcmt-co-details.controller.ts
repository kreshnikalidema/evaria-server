import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PcmtCoDetailService } from './pcmt-co-details.service';
import { CreatePcmtCoDetailDto } from './dto/create-pcmt-co-detail.dto';
import { UpdatePcmtCoDetailDto } from './dto/update-pcmt-co-detail.dto';

@Controller('details')
export class DetailsController {
  constructor(private readonly pcmtCoDetailService: PcmtCoDetailService) {}

  @Post()
  create(@Body() dto: CreatePcmtCoDetailDto) {
    return this.pcmtCoDetailService.create(dto);
  }

  @Get()
  findAll() {
    return this.pcmtCoDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcmtCoDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePcmtCoDetailDto) {
    return this.pcmtCoDetailService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcmtCoDetailService.remove(+id);
  }
}
