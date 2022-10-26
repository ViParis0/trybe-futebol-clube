import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { expect } from 'chai';
import Matches from '../database/models/Matches';
import { allMatches, doneMatches, inPgrogressTrueMatches } from './mocks/matches';

chai.use(chaiHttp);

describe('Verifica a rota /matches', () => {
  afterEach(() => {
    (Matches.findAll as sinon.SinonStub).restore();
  })
  it('Verifica se é retornado um status 200 e um array com todos jogos', async () => {
    sinon.stub(Matches, 'findAll').resolves(allMatches as unknown as Matches[])
    const httpResponse = await chai.request(app).get('/matches');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allMatches);
  })
  it('Verifica se é retornado um status 200 e um array com todos os jogos em andamento', async () => {
    sinon.stub(Matches, 'findAll').resolves(inPgrogressTrueMatches as unknown as Matches[])
    const httpResponse = await chai.request(app).get('/matches?inProgress=true');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(inPgrogressTrueMatches);
  })
  it('Verifica se é retornado um status 200 e um array com todos os jogos finalizados', async () => {
    sinon.stub(Matches, 'findAll').resolves(doneMatches as unknown as Matches[])
    const httpResponse = await chai.request(app).get('/matches?inProgress=false');
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(doneMatches);
  })
})
