import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import User from '../database/models/User';

import { Response } from 'superagent';
import { correctBody, incorrectBody, incorrectBodyResponse, token, user } from './mocks/user';
import { app } from '../app';
import { expect } from 'chai';
import TokenManager from '../helpers/TokenManager';

chai.use(chaiHttp);

describe('Verifica a rota /login', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(user as User);
      sinon.stub(TokenManager, "makeToken").resolves(token)
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
  it('Verifica se retorna um bad request status 400, ao passar usuário ou senha invalidos', async () => {
    const httpResponse = await chai.request(app).post('/login').send(incorrectBody);
    expect(httpResponse.status).to.be.equal(400);
    expect(httpResponse.body).to.be.deep.equal(incorrectBodyResponse);
  })
})