//Interfaces
import { FastifyInstance } from "fastify";

//Adapters
import { NotificationRepoAdapter } from "@/modules/notification/infrastructure/repoImplement/notification.adapter";
//Controller
import { genericController } from "@/presentation/adapters/genericController.adapter";

//Use Cases
import { emailUseCase } from "@/modules/notification/application/use-cases/email.use-case";

const notificationAdapter = new NotificationRepoAdapter();


const notificationRoutes = (routes: FastifyInstance): void => {
  routes.post("/email", genericController(emailUseCase, notificationAdapter));
};

export default notificationRoutes;
