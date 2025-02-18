import { ISendEmailProps, ISendEmailResponse, ISendNotificationProps } from "@/modules/notification/domain/interfaces/sendEmail.interface";
import { INotification } from "@/shared/interfaces/entities/notification.interface";


export interface INotificationOutputPort {
  sendEmail: (mailOptions: ISendEmailProps) => Promise<ISendEmailResponse>;
  sendNotification: (notification: ISendNotificationProps) => Promise<INotification>;
  deleteNotification: (idNotification: string) => Promise<INotification | null>;
  readNotification: (idNotification: string) => Promise<INotification | null>;
}
