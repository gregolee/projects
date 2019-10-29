const should = require('should');
const request = require('supertest');
const app = require('../../express_app');

describe('GET /users', () => {
    it('should return 200 status code', () => {
        (true).should.be.equal(true);
    });
});

describe('GET /users', () => {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .end((err, res) => {
                if(err) throw err;
                res.body.should.be.an.instanceof(Array).and.have.length(3);
                res.body.map(user => {
                    user.should.have.properties('id', 'name');
                    user.id.should.be.a.Number();
                    user.name.should.be.a.String();
                });
                done();
            });
    });
});