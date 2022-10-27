import Matches from '../../database/models/Matches';

export interface ISimpleMatch {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatch extends ISimpleMatch {
  id?: number;
  homeTeam: number;
  awayTeam: number;
}

export interface IMatchesService {
  getMatches(): Promise<Matches[]>
  getInprogressMatches(inProgress: string): Promise<Matches[]>
  createMatch(match: IMatch, token: string): Promise<Matches>
  finishMatch(id: number): Promise<void>
  updateScore(id: number, body: ISimpleMatch): Promise<void>
}
