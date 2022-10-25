import { NextFunction, Request, Response } from 'express';
import { ITeamsService } from '../interfaces/services/ITeamsServices';

export default class TeamsController {
  private readonly teamsService: ITeamsService;

  constructor(teamsService: ITeamsService) {
    this.teamsService = teamsService;
  }

  public getTeams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.teamsService.getTeams();
      res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };
}
