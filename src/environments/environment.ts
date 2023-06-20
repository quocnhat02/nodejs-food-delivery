import { DevEnvironment } from './environmment.dev';
import { ProdEnvironment } from './environmment.prod';

export interface Environment {
  db_uri: string;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === 'production') {
    return ProdEnvironment;
  }
  return DevEnvironment;
}
