import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Teams from '../database/models/Teams';
import { allTeams, oneTeam } from './mocks/teams';
import { app } from '../app';
import { expect } from 'chai';

chai.use(chaiHttp);

describe('Verifica a rota /teams', () => {
  beforeEach(async () => {
    sinon
    .stub(Teams, 'findAll')
    .resolves(allTeams as Teams[])
  })
  afterEach(() => {
    (Teams.findAll as sinon.SinonStub).restore();
  })
  it('Verifical se é retornado um status 200, e um array contendo todos os timesm, com o metodo GET no /teams', async () => {
    const httpResponse = await chai.request(app).get('/teams');
    expect(httpResponse.status).to.be.equal(200)
    expect(httpResponse.body).to.be.deep.equal(allTeams)
  })
})

describe('Verifica a rota /teams/:id', () => {
  beforeEach(async () => {
    sinon
    .stub(Teams, 'findOne')
    .resolves(oneTeam as Teams)
  })
  afterEach(() => {
    (Teams.findOne as sinon.SinonStub).restore();
  })
  it('Verifical se é retornado um status 200, e um array contendo todos os timesm, com o metodo GET no /teams', async () => {
    const httpResponse = await chai.request(app).get('/teams/1');
    expect(httpResponse.status).to.be.equal(200)
    expect(httpResponse.body).to.be.deep.equal(oneTeam)
  })
})

