import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoDetail } from './entities/co-detail.entity';
import { CoDetailService } from './co-detail.service';
import { DetailsController } from './co-detail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CoDetail])],
  controllers: [DetailsController],
  providers: [CoDetailService],
})
export class DetailsModule {}
