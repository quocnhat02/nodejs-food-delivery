import { Environment } from './environment';

export const ProdEnvironment: Environment = {
  db_uri: 'mongodb://127.0.0.1:27017/swiggyCloneApp',
  sendgrid: {
    api_key:
      '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',
    email_from: 'nguyenquocnhatdemo@gmail.com',
  },
  gmail_auth: {
    user: 'nguyenquocnhatdemo@gmail.com',
    pass: 'Quocnhat03012002@',
  },
};
