import HttpException from '../helpers/HttpException';
import User from '../database/models/User';
import crypt from '../helpers/Crypt';
import token from '../helpers/TokenManager';

interface ILogin {
  email: string,
  password: string,
}

export default class LoginService {
  public makeLogin = async ({ email, password }: ILogin) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new HttpException(404, 'user not found');
    if (crypt.compare(password, user.password)) {
      return token.makeToken(user);
    }
    throw new HttpException(400, 'email or password invalid');
  };
}
