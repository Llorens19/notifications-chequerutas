//Interfaces
import { FastifyInstance } from "fastify";

//Adapters
import { NotificationRepoAdapter } from "@/modules/notification/infrastructure/repoImplement/notification.adapter";

//Controller
import { genericController } from "@/presentation/adapters/genericController.adapter";

//Use Cases
import { notificationUseCase } from "@/modules/notification/application/use-cases/notification.use-case";

const notificationAdapter = new NotificationRepoAdapter();


const notificationRoutes = (routes: FastifyInstance): void => {
  routes.post("/notification", genericController(notificationUseCase, notificationAdapter));
};

export default notificationRoutes;
