import { JwtPayload } from 'jsonwebtoken';

export interface ILogin {
  email: string,
  password: string,
}

export interface IAuthorization {
  authorization: string
}

export interface IPayload extends JwtPayload{
  data: {
    id: number,
    username: string,
    role: string,
    email: string,
    password: string,
  }
}

export default interface ILoginService {
  makeLogin({ email, password }: ILogin): Promise<string>;
  validateLogin(token: string): IPayload;
}
