import { ISendEmailProps, ISendEmailResponse } from "@/modules/notification/domain/interfaces/sendEmail.interface";


export interface INotificationOutputPort {
  sendEmail: (mailOptions: ISendEmailProps) => Promise<ISendEmailResponse>;
}
