export interface INotification{
  idNotification: string;
  idUser: string;
  body: string;
  title: string;
  type: string;
  readed: boolean;
  deleted: boolean;
  createdAt?: Date;
}