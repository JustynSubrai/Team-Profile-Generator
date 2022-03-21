const Engineer = require('../lib/Engineer.js');

describe('creates a engineer object', () => {
    const engineer = new Engineer('Nameless King', 542, 'NamelessThunderGod@gmail.com', 'KingofThunder@github.com', 'Engineer');

    it('should create a new class named Engineer with 5 properties', () => {

        expect(engineer).toEqual({name:'Nameless King', id: 542, email: 'NamelessThunderGod@gmail.com', github: 'KingofThunder@github.com',role: 'Engineer'});
    });

    it('should have the role return Engineer when getRole is called', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    });   

    it('should return the engineer when getGithub is called', () => {
        expect(engineer.getGithub()).toEqual(`${engineer.github}`);
    });
});
