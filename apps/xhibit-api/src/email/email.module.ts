import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

import { EmailService } from './email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';


@Module({
  imports: [MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      transport: {
        host: configService.get('SMTP_HOST'),
        port: configService.get('SMTP_PORT'),
        secure: Boolean(configService.get('SMTP_SECURE')),
        auth: {
          user: configService.get('SMTP_USERNAME'),
          pass: configService.get('SMTP_PASSWORD'),
        },
      },
      defaults: {
        from: '"No Reply" no-reply@xhibit.com',
      },
      template: {
        dir: process.cwd() + '/src/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    inject: [ConfigService],
  }),],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule { }
