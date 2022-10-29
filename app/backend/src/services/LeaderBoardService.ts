import leaderBoardHomeQ,
{ leaderBoardAwayQ, totalLeaderBoard } from '../helpers/querys/leaderBoard';
import sequelize from '../database/models';
import ILeaderBoardService, { ILeaderBoard } from '../interfaces/services/ILeaderBoardService';

export default class LeaderBoardService implements ILeaderBoardService {
  public getLeaderBoardHome = async (): Promise<ILeaderBoard[]> => {
    const [leaderBoard] = await sequelize.query(leaderBoardHomeQ);
    return leaderBoard as ILeaderBoard[];
  };

  public getLeaderBoardAway = async (): Promise<ILeaderBoard[]> => {
    const [leaderBoard] = await sequelize.query(leaderBoardAwayQ);
    return leaderBoard as ILeaderBoard[];
  };

  public getTotalLeaderBoard = async (): Promise<ILeaderBoard[]> => {
    const [totalBoard] = await sequelize.query(totalLeaderBoard);
    return totalBoard as ILeaderBoard[];
  };
}
