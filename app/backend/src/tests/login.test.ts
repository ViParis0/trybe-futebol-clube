import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import User from '../database/models/User';

import { Response } from 'superagent';
import { correctBody, incorrectBodyInvalidEmail, incorrectBodyInvalidPassword, incorrectBodyResponse, missingBodyEmail, missingBodyPassword, missingBodyResponse, token, user } from './mocks/user';
import { app } from '../app';
import { expect } from 'chai';
import TokenManager from '../helpers/TokenManager';
import LoginService from '../services/LoginService';

chai.use(chaiHttp);

describe('Verifica a rota /login', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(user as User);
      sinon.stub(TokenManager, "makeToken").returns(token)
    });

    afterEach(()=>{
        (User.findOne as sinon.SinonStub).restore();
        (TokenManager.makeToken as sinon.SinonStub).restore();
      })

  it('Verifica se é retornado um status 200 e um token, passando os dados corretos', async () => {
    const httpResponse = await chai.request(app).post('/login').send(correctBody);
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal({ token });
  })
  it('Verifica se retorna um bad request status 401, ao passar senha invalida', async () => {
    const httpResponse = await chai.request(app).post('/login').send(incorrectBodyInvalidPassword);
    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal(incorrectBodyResponse);
  })
  it('Verifica se retorna um bad request status 400, ao não passar usuário ou senha', async () => {
    const httpResponse = await chai.request(app).post('/login').send(missingBodyEmail);
    expect(httpResponse.status).to.be.equal(400);
    expect(httpResponse.body).to.be.deep.equal(missingBodyResponse);
  })
  it('Verifica se retorna um bad request status 400, ao não passar usuário ou senha', async () => {
    const httpResponse = await chai.request(app).post('/login').send(missingBodyPassword);
    expect(httpResponse.status).to.be.equal(400);
    expect(httpResponse.body).to.be.deep.equal(missingBodyResponse);
  })
})

describe('Testando um usuário invalido', () => {
  it('Verifica se retorna um bad request status 401, ao passar usuário invalido', async () => {
    sinon.stub(User, "findOne").resolves();
    const httpResponse = await chai.request(app).post('/login').send(incorrectBodyInvalidEmail);
    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal(incorrectBodyResponse);
  })
})

describe('Testando a rota /login/validate', () => {
  it('Verifica se retorna uma role e um status 200, ao passar um token valido', async () => {
    sinon.stub(TokenManager, 'validateToken').returns({ data: { role: 'admin' } });
    const httpResponse = await chai.request(app).get('/login/validate').set('Authorization', token)
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal({role: "admin"});
  })
})