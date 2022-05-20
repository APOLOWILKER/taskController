import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import connection from '../../models/connection';
import { describe, it, before, after } from 'mocha';

import { app } from '../../app';
import { getAllTasks, notTasks } from './Tasks.Mocks';
import TaskModel from '../../models/ModelTasks';
import ITasks from '../../interfaces/TasksInterface';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando a requisição das tarefas', () => {
  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(connection, "execute").resolves([getAllTasks] as any );
  });

  after( async () => {
    (connection.execute as sinon.SinonStub).restore();
  });

  it('Solicitando todas as tarefas', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/tasks');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body[0]).to.be.keys('id', 'createdAt', 'titleTask', 'contentTask', 'statusTask');
      expect(chaiHttpResponse.body).to.be.deep.equal(getAllTasks);
  })

});

