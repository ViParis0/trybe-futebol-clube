import Matches from '../../database/models/Matches';

export interface IMatchesService {
  getMatches(): Promise<Matches[]>
}
