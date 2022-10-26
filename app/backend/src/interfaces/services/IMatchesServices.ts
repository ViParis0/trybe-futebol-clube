import Matches from '../../database/models/Matches';

export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
}

export interface IMatchesService {
  getMatches(): Promise<Matches[]>
  getInprogressMatches(inProgress: string): Promise<Matches[]>
  createMatch(match: IMatch, token: string): Promise<Matches>
}
