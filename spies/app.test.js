const rewire = require('rewire');
const expect = require('expect');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Flavio', 45);
        expect(spy).toHaveBeenCalledWith('Flavio', 45);
    });

    it('should call saveUser with user object', () => {
        var email = 'flavio.marcondes@gmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});