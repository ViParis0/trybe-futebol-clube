import Matches from '../database/models/Matches';
import { IMatchesService } from '../interfaces/services/IUserService';

export default class MatchesServices implements IMatchesService {
  public getMatches = async (): Promise<Matches[]> => {
    const matches = await Matches.findAll();
    return matches;
  };
}
