import { BOOLEAN, INTEGER, Model } from 'sequelize';
import dataBase from '.';

class Matches extends Model { }

Matches.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    type: BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize: dataBase,
  underscored: true,
});

export default Matches;
