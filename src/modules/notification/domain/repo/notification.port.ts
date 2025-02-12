import { ISendEmailProps, ISendEmailResponse, ISendNotificationProps } from "@/modules/notification/domain/interfaces/sendEmail.interface";
import { INotification } from "@/shared/interfaces/entities/notification.interface";


export interface INotificationOutputPort {
  sendEmail: (mailOptions: ISendEmailProps) => Promise<ISendEmailResponse>;
  sendNotification: (notification: ISendNotificationProps) => Promise<INotification>;
}
