import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IMatch, IMatchesService } from '../interfaces/services/IMatchesServices';

export default class MatchesServices implements IMatchesService {
  public getMatches = async (): Promise<Matches[]> => {
    const matches = await Matches.findAll({ include:
       [{ model: Teams, as: 'teamHome', required: false, attributes: ['teamName'] }],
    });
    return matches;
  };

  public getInprogressMatches = async (inProgres: string): Promise<Matches[]> => {
    const matches = await Matches.findAll({ where:
      { inProgress: inProgres === 'true' },
    include:
      [{ model: Teams, as: 'teamHome', required: false, attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', required: false, attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  public createMatch = async (match: IMatch): Promise<Matches> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const createdMatch = await Matches.create({ where:
       { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } });
    return createdMatch;
  };
}
