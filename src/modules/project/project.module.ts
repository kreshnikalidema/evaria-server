import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '@/modules/mail/mail.module';
import { Project } from './entities/project.entity';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectCreatedListener } from './listeners/project-created.listener';
import { ProjectUpdatedListener } from './listeners/project-updated.listener';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), MailModule],
  exports: [ProjectService],
  providers: [ProjectService, ProjectCreatedListener, ProjectUpdatedListener],
  controllers: [ProjectController],
})
export class ProjectModule {}
