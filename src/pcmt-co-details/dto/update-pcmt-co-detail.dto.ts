import { PartialType } from '@nestjs/mapped-types';
import { CreatePcmtCoDetailDto } from './create-pcmt-co-detail.dto';

export class UpdatePcmtCoDetailDto extends PartialType(CreatePcmtCoDetailDto) {}
