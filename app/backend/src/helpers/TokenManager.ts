import * as jwt from 'jsonwebtoken';
import HttpException from './HttpException';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class TokenManager {
  static makeToken = (payload: unknown) => {
    const token = jwt.sign({ data: payload }, secret);
    return token;
  };

  static validateToken = (token:string) => {
    try {
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (error) {
      throw new HttpException(401, 'Token must be a valid token');
    }
  };
}
