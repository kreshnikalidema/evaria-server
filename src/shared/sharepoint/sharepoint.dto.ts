import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class SharePointDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  uniqueId: string;

  @IsNotEmpty()
  @IsString()
  createdAt: string;

  @IsNotEmpty()
  @IsString()
  modifiedAt: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;
}
