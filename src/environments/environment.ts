import { DevEnvironment } from './environmment.dev';
import { ProdEnvironment } from './environmment.prod';

export interface Environment {
  db_uri: string;
  sendgrid: {
    api_key?: string;
    email_from?: string;
  };
  gmail_auth?: {
    user: string;
    pass: string;
  };
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === 'production') {
    return ProdEnvironment;
  }
  return DevEnvironment;
}
