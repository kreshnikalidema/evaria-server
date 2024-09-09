import { PartialType } from '@nestjs/mapped-types';
import { CreatePcmtMasterDto } from './create-pcmt-master.dto';

export class UpdatePcmtMasterDto extends PartialType(CreatePcmtMasterDto) {}
