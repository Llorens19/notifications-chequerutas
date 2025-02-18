//interfaces
import { IUseCaseData } from "@/shared/interfaces/useCaseGenericInpur.interface";
import { IResp } from "@/shared/interfaces/utils/respUtils.interface";
import { INotificationOutputPort } from "@/modules/notification/domain/repo/notification.port";

//utils
import { resp } from "@/shared/utils/resp.util";
import { INotification } from "@/shared/interfaces/entities/notification.interface";


export const readNotificationUseCase = async ({ repo, request }: IUseCaseData<INotificationOutputPort>): Promise<IResp<INotification>> => {

  const { idNotification } = request.params as {idNotification: string};

  const response = await repo.readNotification(idNotification);

  return resp(200, response as INotification);
};
