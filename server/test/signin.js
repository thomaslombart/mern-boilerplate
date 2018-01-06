import chai from 'chai';
import chaiHttp from 'chai-http';
const should = chai.should();

import app from '../../app';
import User from '../models/user';

chai.use(chaiHttp);

describe('/auth/signin', () => {
    beforeEach((done) => {
        let user = new User({
            username: 'tester',
            password: 'test'
        });
        user.save((err) => {
            if (err) throw err;
            done();
        });
    });

    afterEach((done) => {
        User.remove({
            username: 'tester'
        }, (err) => {
            if (err) throw err;
            done();
        });
    });

    it('it should signin a user with right credentials', (done) => {
        let user = {
            username: 'tester',
            password: 'test'
        };
        chai.request(app)
            .post('/api/auth/signin')
            .send(user)
            .end((err, res) => {
                res.body.should.be.a.string;
                res.status.should.equal(200);
                done();
            });
    });

    it('it should not signin a user with wrong password', (done) => {
        let user = {
            username: 'tester',
            password: 'wrong'
        };
        chai.request(app)
            .post('/api/auth/signin')
            .send(user)
            .end((err, res) => {
                res.status.should.equal(403);
                res.body.should.have.property('error');
                done();
            });
    });

    it('it should not signin a user unknown from the system', (done) => {
        let user = {
            username: 'nobody_knows_me',
            password: 'some_password'
        };
        chai.request(app)
            .post('/api/auth/signin')
            .send(user)
            .end((err, res) => {
                res.status.should.equal(401);
                res.body.should.have.property('error');
                done();
            });
    });
});