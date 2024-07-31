export interface ISendEmail {
  recipient: string;
  subject: string;
  attachment?: any;
  template?: string;
  context?: any
  html?: string;
  text?: string
}
