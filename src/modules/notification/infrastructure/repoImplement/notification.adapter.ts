import { transporter } from "@/config/nodemailer.config";
import { ISendEmailProps, ISendEmailResponse } from "@/modules/notification/domain/interfaces/sendEmail.interface";
import { INotificationOutputPort } from "@/modules/notification/domain/repo/notification.port";


export class NotificationRepoAdapter implements INotificationOutputPort {

  sendEmail = async (mailOptions: ISendEmailProps): Promise<ISendEmailResponse> => {
    try {
      await transporter.sendMail(mailOptions);
      return { state: 'success' }
    } catch (error) {
      return { state: 'error' }
    }
  }


}
