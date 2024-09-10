import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcmtCoDetail } from './entities/pcmt-co-detail.entity';
import { PcmtCoDetailService } from './pcmt-co-details.service';
import { DetailsController } from './pcmt-co-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PcmtCoDetail])],
  controllers: [DetailsController],
  providers: [PcmtCoDetailService],
})
export class DetailsModule {}
