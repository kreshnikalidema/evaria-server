import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('MAIL_SERVICE_USER'),
        pass: this.configService.get<string>('MAIL_SERVICE_PASS'),
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const from = this.configService.get<string>('MAIL_SERVICE_USER');

    await this.transporter.sendMail({
      from,
      to,
      subject,
      text,
    });
  }
}
