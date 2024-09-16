import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { MailService } from '@/modules/mail/mail.service';
import { Project } from '../entities/project.entity';

@Injectable()
export class ProjectCreatedListener {
  constructor(mailService: MailService) {}

  @OnEvent('project.created')
  public async handleProjectCreatedEvent(project: Project) {}
}
