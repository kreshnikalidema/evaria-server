import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { CreatePcmtMasterDto } from '@/pcmt-master/dto/create-pcmt-master.dto';

export class CreatePcmtCoDetailDto {
  @IsNotEmpty()
  @IsString()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  pvNumber: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  categoryDesc: string;

  @IsNotEmpty()
  @IsString()
  categoryType: string;

  @IsNotEmpty()
  @IsString()
  discipline: string;

  @IsNotEmpty()
  @IsString()
  operatingCenterId: string;

  @IsNotEmpty()
  @IsNumber()
  kbrWorkhours: number;

  @IsNotEmpty()
  @IsString()
  kbrWorkhoursValueType: string;

  @IsNotEmpty()
  @IsNumber()
  kbrWorkhoursCost: number;

  @IsNotEmpty()
  @IsString()
  kbrWorkhoursCostValueType: string;

  @IsNotEmpty()
  @IsDate()
  dtFrom: Date;

  @IsNotEmpty()
  @IsDate()
  dtTo: Date;

  @IsNotEmpty()
  @IsNumber()
  isValid: number;

  @IsNotEmpty()
  @IsString()
  insertUser: string;

  @IsNotEmpty()
  @IsDate()
  insertDt: Date;

  @IsOptional()
  @IsString()
  updateUser: string;

  @IsOptional()
  @IsDate()
  updateDt: Date;

  @IsNotEmpty()
  @IsString()
  basis: string;

  @IsNotEmpty()
  @IsString()
  varianceNumber: string;

  @IsNotEmpty()
  @IsString()
  revNo: string;

  @IsNotEmpty()
  @IsNumber()
  clientWorkhours: number;

  @IsNotEmpty()
  @IsString()
  clientWorkhoursValueType: string;

  @IsNotEmpty()
  @IsNumber()
  clientWorkhoursCost: number;

  @IsNotEmpty()
  @IsString()
  statusId: string;

  @IsNotEmpty()
  @IsString()
  clientWorkhoursCostValType: string;

  @IsNotEmpty()
  @IsNumber()
  loadKey: number;

  @IsNotEmpty()
  @IsString()
  scheduleImpact: string;

  @IsNotEmpty()
  @IsNumber()
  scheduleImpactValue: number;

  @IsOptional()
  @IsString()
  scheduleImpactNotes: string;

  @IsNotEmpty()
  @IsNumber()
  isDeleted: number;

  @IsNotEmpty()
  @IsNumber()
  stageId: number;

  @IsOptional()
  @IsString()
  totalScheduleImpactValue: string;

  @IsOptional()
  @IsString()
  totalScheduleImpactNotes: string;

  @IsOptional()
  @IsString()
  dtInsertUtc: string;

  @IsOptional()
  @IsString()
  dtUpdateUtc: string;

  @IsOptional()
  @IsString()
  wbsCode1: string;

  @IsOptional()
  @IsString()
  wbsCode2: string;

  @IsOptional()
  @IsString()
  cbsCode: string;

  @IsOptional()
  @IsString()
  businessUnit: string;

  @IsOptional()
  @IsString()
  billType: string;

  @IsOptional()
  @IsString()
  kbrCurrency: string;

  @IsOptional()
  @IsString()
  clientCurrency: string;

  @IsNotEmpty()
  @IsNumber()
  mandatoryDisciplineFlag: number;

  @IsOptional()
  @IsString()
  originalCostType: string;

  @IsOptional()
  pcmtMaster: CreatePcmtMasterDto;
}
