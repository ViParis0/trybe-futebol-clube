export interface ILogin {
  email: string,
  password: string,
}

export default interface ILoginService {
  makeLogin({ email, password }: ILogin): Promise<string>;
}
