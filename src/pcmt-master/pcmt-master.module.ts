import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PcmtMaster } from './entities/pcmt-master.entity';
import { PcmtMasterService } from './pcmt-master.service';
import { PcmtMasterController } from './pcmt-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PcmtMaster])],
  providers: [PcmtMasterService],
  controllers: [PcmtMasterController],
})
export class PcmtMasterModule {}
