import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProjectDto } from '@/modules/project/dto/create-project.dto';

export class CreateAttachmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @Type(() => CreateProjectDto)
  project: CreateProjectDto;
}
