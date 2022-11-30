import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';
import User from '../../database/models/User.model';
import loginMock from '../mock/login.mock';

chai.use(chaiHttp);

const { expect } = chai;
