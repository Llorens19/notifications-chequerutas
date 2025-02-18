import { transporter } from "@/config/nodemailer.config";
import { AppDataSource } from "@/config/typeorm.config";
import { ISendEmailProps, ISendEmailResponse, ISendNotificationProps } from "@/modules/notification/domain/interfaces/sendEmail.interface";
import { INotificationOutputPort } from "@/modules/notification/domain/repo/notification.port";
import { Notifications } from "@/shared/entities/Notifications";
import { INotification } from "@/shared/interfaces/entities/notification.interface";

const connectionNotifications = AppDataSource.getRepository<INotification>(Notifications);

export class NotificationRepoAdapter implements INotificationOutputPort {

  sendEmail = async (mailOptions: ISendEmailProps): Promise<ISendEmailResponse> => {
    try {
      await transporter.sendMail(mailOptions);
      return { state: 'success' }
    } catch (error) {
      return { state: 'error' }
    }
  }

  sendNotification = async ({idUser, title, body, type}: ISendNotificationProps): Promise<INotification> => {
    const notification = connectionNotifications.create({
      idUser,
      title,
      body,
      type,
      readed: false,
      deleted: false,
      createdAt: new Date()
    });
    return await connectionNotifications.save(notification);
  }

  deleteNotification = async (idNotification: string): Promise<INotification | null> => {
    const notification = await connectionNotifications.findOne({ where: { idNotification } });
    if (!notification) return null;

    notification.deleted = true;
    return await connectionNotifications.save(notification);

  }
  readNotification = async (idNotification: string): Promise<INotification | null> => {
    const notification = await connectionNotifications.findOne({ where: { idNotification } });
    if (!notification) return null;

    notification.readed = true;
    return await connectionNotifications.save(notification);
  }


}
