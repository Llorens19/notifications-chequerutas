//interfaces
import { IUseCaseData } from "@/shared/interfaces/useCaseGenericInpur.interface";
import { IResp } from "@/shared/interfaces/utils/respUtils.interface";
import { IEmailInput } from "@/modules/notification/domain/interfaces/email.interface";
import { INotificationOutputPort } from "@/modules/notification/domain/repo/notification.port";

//utils
import { resp } from "@/shared/utils/resp.util";
import { ISendEmailResponse } from "@/modules/notification/domain/interfaces/sendEmail.interface";




export const emailUseCase = async ({ repo, request }: IUseCaseData<INotificationOutputPort>): Promise<IResp<ISendEmailResponse>> => {

  const { to, subject, text } = request.body as IEmailInput;

  const mailOptions = {
    from: process.env.EMAIL_USER!,
    to,
    subject,
    text,
  };

  const response = await repo.sendEmail(mailOptions);

  return resp(200, response ? response : { state: 'error' });
};
