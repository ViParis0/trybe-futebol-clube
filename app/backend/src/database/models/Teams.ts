import { INTEGER, Model, STRING } from 'sequelize';
import dataBase from '.';
// import Matches from './Matches';

class Teams extends Model {
  id: number;
  teamName: string;
}

Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: STRING,
}, {
  sequelize: dataBase,
  underscored: true,
  timestamps: false,
});

// Teams.belongsTo(Matches, { foreignKey: 'homeTeam', as: 'homeTeam' });
// Teams.belongsTo(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });

// Matches.hasMany(Teams, { foreignKey: 'id', as: 'teams' });

export default Teams;
