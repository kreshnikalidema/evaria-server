import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoDetailService } from './co-detail.service';
import { CreateCoDetailDto } from './dto/create-co-detail.dto';
import { UpdateCoDetailDto } from './dto/update-co-detail.dto';

@Controller('co-details')
export class DetailsController {
  constructor(private readonly coDetailService: CoDetailService) {}

  @Post()
  create(@Body() dto: CreateCoDetailDto) {
    return this.coDetailService.create(dto);
  }

  @Get()
  findAll() {
    return this.coDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCoDetailDto) {
    return this.coDetailService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coDetailService.remove(+id);
  }
}
