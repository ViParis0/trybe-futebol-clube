import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { expect } from 'chai';
import Matches from '../database/models/Matches';
import { allMatches, correctCreateBody, createdMatch, doneMatches, inPgrogressTrueMatches } from './mocks/matches';
import { token } from './mocks/user';
import TokenManager from '../helpers/TokenManager';

chai.use(chaiHttp);

describe('Verifica a rota /matches', () => {
  afterEach(() => {
    sinon.restore()
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
  it(`Verifica se é retornado um status 201,
   e um corpo com o numero do id da nova partida criada com um post em /matches`, async () => {
    sinon.stub(Matches, 'create').resolves(createdMatch as Matches)
    sinon.stub(TokenManager, 'validateToken').returns({ data: { role: 'admin' } });
    const httpResponse = await chai.request(app).post('/matches').send(correctCreateBody).set('Authorization', token);
    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(createdMatch);
  })
  it(`Verifica se é retornado um status 500,
  e uma mensagem de erro ao fazer um post em /matches sem um token`, async () => {
   sinon.stub(Matches, 'create').resolves(createdMatch as Matches)
   sinon.stub(TokenManager, 'validateToken').throws();
   const httpResponse = await chai.request(app).post('/matches').send(correctCreateBody);
   expect(httpResponse.status).to.be.equal(500);
   expect(httpResponse.body).to.be.deep.equal({
    "message": "Error"
  });
 })
})
