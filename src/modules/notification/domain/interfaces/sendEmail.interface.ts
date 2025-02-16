
export interface ISendEmailProps {
  to: string;
  subject: string;
  text: string;
  from: string;
}

export interface ISendNotificationProps {
  idUser: string;
  title: string;
  body: string;
  type: string;
}

export interface ISendEmailResponse {
  state: 'success' | 'error';
}