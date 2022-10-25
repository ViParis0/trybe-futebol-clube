import { NextFunction, Request, Response } from 'express';
import ILoginService from '../interfaces/services/IUserService';

export default class LoginController {
  private readonly loginService: ILoginService;

  constructor(loginService: ILoginService) {
    this.loginService = loginService;
  }

  public makeLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.loginService.makeLogin(req.body);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
