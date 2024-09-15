import { PartialType } from '@nestjs/mapped-types';
import { CreateCoDetailDto } from './create-co-detail.dto';

export class UpdateCoDetailDto extends PartialType(CreateCoDetailDto) {}
