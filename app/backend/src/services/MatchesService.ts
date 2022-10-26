import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IMatch, IMatchesService } from '../interfaces/services/IMatchesServices';
import HttpException from '../helpers/HttpException';
import TokenManager from '../helpers/TokenManager';
import TeamsService from './TeamsService';

const teamsService = new TeamsService();

export default class MatchesServices implements IMatchesService {
  public getMatches = async (): Promise<Matches[]> => {
    const matches = await Matches.findAll({ include:
       [{ model: Teams, as: 'teamHome', required: false, attributes: ['teamName'] },
         { model: Teams, as: 'teamAway', required: false, attributes: ['teamName'] },
       ],
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

  public createMatch = async (match: IMatch, token: string): Promise<Matches> => {
    const payload = TokenManager.validateToken(token);
    if (!payload) throw new HttpException(401, 'Token must be a valid token');
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    if (homeTeam === awayTeam) {
      throw new HttpException(
        422,
        'It is not possible to create a match with two equal teams',
      );
    }
    const exists = await teamsService.getTeam(homeTeam);
    const exists2 = await teamsService.getTeam(awayTeam);
    if (!exists || !exists2) throw new HttpException(404, 'There is no team with such id!');
    const createdMatch = await Matches.create(
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true },
    );
    return createdMatch;
  };

  public finishMatch = async (id: number): Promise<void> => {
    const finished = await Matches.update({ inProgress: false }, { where: { id } });
    if (finished) return;
    throw new Error('Something went wrong');
  };
}
