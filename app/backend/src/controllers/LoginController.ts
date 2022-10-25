import { NextFunction, Request, Response } from 'express';

import LoginService from '../services/LoginService';

const loginService = new LoginService();

export default class LoginController {
  public makeLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await loginService.makeLogin(req.body);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
