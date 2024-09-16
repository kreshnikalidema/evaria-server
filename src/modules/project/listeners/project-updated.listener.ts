import { Injectable } from '@nestjs/common';
import { compile } from 'handlebars';
import { OnEvent } from '@nestjs/event-emitter';
import { MailService } from '@/modules/mail/mail.service';
import { Project } from '../entities/project.entity';
import { projectUpdatedTemplate } from './project-updated.template';

@Injectable()
export class ProjectUpdatedListener {
  constructor(private readonly mailService: MailService) {}

  @OnEvent('project.updated')
  public async handleProjectUpdatedEvent(project: Project) {
    if (project.clientRevNo > 2) {
      const html = compile(projectUpdatedTemplate)(project);
      await this.mailService.sendMail(project.projectName, html);
    }
  }
}
