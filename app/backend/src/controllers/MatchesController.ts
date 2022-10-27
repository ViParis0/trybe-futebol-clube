import { NextFunction, Request, Response } from 'express';
import { IMatchesService } from '../interfaces/services/IMatchesServices';

export default class MatchesController {
  private readonly matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
    // this.loginService = new LoginService();
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
      const token = req.headers.authorization as string;
      const match = await this.matchesService.createMatch(req.body, token);
      return res.status(201).json(match);
    } catch (error) {
      return next(error);
    }
  };

  public finishMatch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.matchesService.finishMatch(Number(id));
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      return next(error);
    }
  };

  public updateScore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.matchesService.updateScore(Number(id), req.body);
      return res.status(200).json({ message: 'ok' });
    } catch (error) {
      return next(error);
    }
  };
}
