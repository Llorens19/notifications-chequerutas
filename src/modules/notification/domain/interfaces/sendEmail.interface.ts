
export interface ISendEmailProps {
  to: string;
  subject: string;
  text: string;
  from: string;
}

export interface ISendEmailResponse {
  state: 'success' | 'error';
}