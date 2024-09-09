import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { IPcmtMaster } from '../pcmt-master.interface';

export class CreatePcmtMasterDto implements IPcmtMaster {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  pvNumber: string;

  @IsNumber()
  @IsNotEmpty()
  incrementalId: number;

  @IsString()
  @IsNotEmpty()
  projectId: string;

  @IsString()
  @IsNotEmpty()
  projectName: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsString()
  @IsOptional()
  disciplineId: string;

  @IsString()
  @IsOptional()
  currencyCode: string;

  @IsString()
  @IsNotEmpty()
  userInsert: string;

  @IsString()
  @IsOptional()
  userUpdateLast: string;

  @IsString()
  @IsOptional()
  varianceNumber: string;

  @IsString()
  @IsOptional()
  revNo: string;

  @IsString()
  @IsOptional()
  pvTitle: string;

  @IsNumber()
  @IsOptional()
  clientRevNo: number;

  @IsString()
  @IsOptional()
  dtModifiedStr: string;

  @IsString()
  @IsOptional()
  cobraPeriodDate: string;

  @IsString()
  @IsOptional()
  dtInsertUtc: string;

  @IsString()
  @IsOptional()
  originalCostType: string;

  @IsNumber()
  @IsOptional()
  isFlowRunning: number;

  @IsString()
  @IsOptional()
  currentWorkStatusId: string;
}
