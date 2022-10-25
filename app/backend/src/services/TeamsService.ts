import Team from '../database/models/Teams';
import { ITeamsService } from '../interfaces/services/ITeamsServices';

export default class TeamsService implements ITeamsService {
  public getTeams = async (): Promise<Team[]> => {
    const teams = await Team.findAll();
    return teams;
  };

  public getTeam = async (id: number): Promise<Team> => {
    const team = await Team.findOne({ where: { id } });
    return team as Team;
  };
}
