import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PcmtMasterModule } from './pcmt-master/pcmt-master.module';
import { DetailsModule } from './details/details.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'oracle',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        serviceName: configService.get<string>('DB_SERVICE_NAME'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        entities: [configService.get<string>('DB_ENTITIES')],
      }),
    }),
    PcmtMasterModule,
    DetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
