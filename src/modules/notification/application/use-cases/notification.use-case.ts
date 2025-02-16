//interfaces
import { IUseCaseData } from "@/shared/interfaces/useCaseGenericInpur.interface";
import { IResp } from "@/shared/interfaces/utils/respUtils.interface";
import { INotificationOutputPort } from "@/modules/notification/domain/repo/notification.port";
import { ISendEmailResponse } from "@/modules/notification/domain/interfaces/sendEmail.interface";
import { INotificationInput } from "@/modules/notification/domain/interfaces/notification.interface";

//utils
import { resp } from "@/shared/utils/resp.util";


export const notificationUseCase = async ({ repo, request }: IUseCaseData<INotificationOutputPort>): Promise<IResp<ISendEmailResponse>> => {

  const { email, idUser, title, body, type } = request.body as INotificationInput;

  const mailOptions = {
    from: process.env.EMAIL_USER!,
    to: email,
    subject: title,
    text: body,
  };

  const response = await repo.sendEmail(mailOptions);

  const notification = await repo.sendNotification({idUser, title, body, type});

  if (!notification) return resp(200, { state: 'error' });


  return resp(200, response ? response : { state: 'error' });
};
