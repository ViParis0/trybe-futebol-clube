import Teams from '../../database/models/Teams';

export interface ITeamsService {
  getTeams(): Promise<Teams[]>
}
