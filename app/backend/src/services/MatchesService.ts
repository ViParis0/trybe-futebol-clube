import Matches from '../database/models/Matches';
import { IMatchesService } from '../interfaces/services/IMatchesServices';

export default class MatchesServices implements IMatchesService {
  public getMatches = async (): Promise<Matches[]> => {
    const matches = await Matches.findAll({ attributes: ['id', 'team_name'] });
    return matches;
  };
}
