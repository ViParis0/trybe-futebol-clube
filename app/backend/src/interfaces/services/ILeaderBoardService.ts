export interface ILeaderBoard {
  name: string,
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency?: string;
}

export default interface ILeaderBoardService {
  getLeaderBoardHome(): Promise<ILeaderBoard[]>
  getLeaderBoardAway(): Promise<ILeaderBoard[]>
  getTotalLeaderBoard(): Promise<ILeaderBoard[]>
}
