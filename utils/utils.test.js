const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    //Asynchronous test 
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    
    it('should square a number', () => {
        var res = utils.square(2);
        expect(res).toBe(4).toBeA('number');
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
    

});



it('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'Flavio'}).toEqual({name: 'Flavio'});
    //expect([2,3,4]).toInclude(2);
    expect({
        name: 'Flavio',
        age: 45,
        location: 'Campinas'
    }).toInclude({
        age: 45
    })
});


it('first and last name shall be correctly set', () => {

    var user = {location: 'Campinas', age: 45};
    var res = utils.setName(user, 'Flavio Oliveira');

    expect(res).toInclude({
            firstName: 'Flavio',
            lastName: 'Oliveira'
        }
    );
});

//should verify first and the last names are set
//assert it includes firstname and lastName with proper values
