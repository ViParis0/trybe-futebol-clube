import { NextFunction, Request, Response } from 'express';
import ILeaderBoardService from '../interfaces/services/ILeaderBoardService';

export default class LeaderBoardController {
  private readonly leaderBoardService: ILeaderBoardService;

  constructor(leaderBoardService: ILeaderBoardService) {
    this.leaderBoardService = leaderBoardService;
  }

  public getLeaderBoardHome = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderBoard = await this.leaderBoardService.getLeaderBoardHome();
      res.status(200).json(leaderBoard);
    } catch (error) {
      next(error);
    }
  };
}
