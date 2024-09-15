import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCoDetailDto } from '@/modules/co-detail/dto/create-co-detail.dto';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  pvNumber: string;

  @IsNotEmpty()
  @IsNumber()
  incrementalId: number;

  @IsNotEmpty()
  @IsString()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  disciplineId: string;

  @IsNotEmpty()
  @IsString()
  currencyCode: string;

  @IsNotEmpty()
  @IsString()
  userInsert: string;

  @IsNotEmpty()
  @IsDate()
  dtInsert: Date;

  @IsNotEmpty()
  @IsString()
  dtInsertUtc: string;

  @IsOptional()
  @IsString()
  userUpdateLast: string;

  @IsOptional()
  @IsDate()
  dtUpdateLast: Date;

  @IsNotEmpty()
  @IsString()
  varianceNumber: string;

  @IsNotEmpty()
  @IsString()
  revNo: string;

  @IsNotEmpty()
  @IsString()
  pvTitle: string;

  @IsOptional()
  @IsNumber()
  clientRevNo: number;

  @IsOptional()
  @IsString()
  dtModifiedStr: string;

  @IsOptional()
  @IsString()
  cobraPeriodDate: string;

  @IsOptional()
  @IsString()
  originalCostType: string;

  @IsNotEmpty()
  @IsNumber()
  isFlowRunning: number;

  @IsOptional()
  @IsString()
  currentWorkStatusId: string;

  @IsOptional()
  @IsString()
  dataJson: string;

  @ValidateNested({ each: true })
  @Type(() => CreateCoDetailDto)
  coDetails: CreateCoDetailDto[];
}
