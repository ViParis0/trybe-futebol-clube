import HttpException from '../helpers/HttpException';
import User from '../database/models/User';
import crypt from '../helpers/Crypt';
import Token from '../helpers/TokenManager';
import ILoginService,
{ ILogin, IPayload } from '../interfaces/services/IUserService';

export default class LoginService implements ILoginService {
  private token = Token;
  public makeLogin = async ({ email, password }: ILogin) => {
    if (!email || !password) throw new HttpException(400, 'All fields must be filled');
    const user: User | null = await User.findOne({ where: { email } });
    if (user && crypt.compare(password, user.password)) {
      return this.token.makeToken(user);
    }
    throw new HttpException(401, 'Incorrect email or password');
  };

  public validateLogin(token: string): IPayload {
    const payload = this.token.validateToken(token);
    return payload as IPayload;
  }
}
