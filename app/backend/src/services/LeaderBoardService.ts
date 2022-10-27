import leaderBoardHomeQ from '../helpers/querys/leaderBoard';
import sequelize from '../database/models';
import ILeaderBoardService, { ILeaderBoard } from '../interfaces/services/ILeaderBoardService';

export default class LeaderBoardService implements ILeaderBoardService {
  public getLeaderBoardHome = async (): Promise<ILeaderBoard[]> => {
    const [leaderBoard] = await sequelize.query(leaderBoardHomeQ);
    return leaderBoard as ILeaderBoard[];
  };
}
