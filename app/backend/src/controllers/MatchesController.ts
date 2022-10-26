import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';
import { IMatchesService } from '../interfaces/services/IMatchesServices';

export default class MatchesController {
  private readonly matchesService: IMatchesService;
  private loginService: LoginService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
    this.loginService = new LoginService();
  }

  public getMatches = async (req: Request, res: Response, next: NextFunction) => {
    const { inProgress } = req.query;
    if (inProgress) {
      try {
        const matches = await this.matchesService.getInprogressMatches(inProgress as string);
        return res.status(200).json(matches);
      } catch (error) {
        return next(error);
      }
    }
    try {
      const matches = await this.matchesService.getMatches();
      return res.status(200).json(matches);
    } catch (error) {
      return next(error);
    }
  };

  public createMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      this.loginService.validateLogin(req.headers.authorization);
      const match = await this.matchesService.createMatch(req.body);
      return res.status(201).json(match);
    } catch (error) {
      return next(error);
    }
  };
}
