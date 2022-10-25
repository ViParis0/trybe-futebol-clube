import { NextFunction, Request, Response } from 'express';
import { IMatchesService } from '../interfaces/services/IMatchesServices';

export default class MatchesController {
  private readonly matchesService: IMatchesService;

  constructor(matchesService: IMatchesService) {
    this.matchesService = matchesService;
  }

  public getMatches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const matches = await this.matchesService.getMatches();
      res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  };
}
