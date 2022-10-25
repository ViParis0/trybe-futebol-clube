import Teams from '../database/models/Teams';
import { ITeamsService } from '../interfaces/services/ITeamsServices';

export default class TeamsService implements ITeamsService {
  public getTeams = async (): Promise<Teams[]> => {
    const teams = await Teams.findAll();
    return teams;
  };
}
