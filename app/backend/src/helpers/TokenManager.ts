import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class TokenManager {
  static makeToken = (payload: unknown) => {
    const token = jwt.sign({ data: payload }, secret);
    return token;
  };
}
