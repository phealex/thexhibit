import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ISendEmail } from './email.interface';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly mailerService: MailerService) { }

  async send(payload: ISendEmail) {
    const currentYear = new Date().getFullYear();
    payload.context.currentYear = currentYear;
    await this.mailerService.sendMail({
      to: payload.recipient,
      subject: payload.subject,
      attachments: payload.attachment,
      template: payload.template,
      context: payload.context,
      html: payload.html,
      text: payload.text
    });
    return true;
  }
}
