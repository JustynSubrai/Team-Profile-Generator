const Intern = require('../lib/Intern.js');

describe('creates a intern object', () => {
    const intern = new Intern('Patches', 463, 'TrustyPatches@gmail.com', 'School of Trickery', 'Intern');

    it('should create a new class named Intern with 5 properties', () => {

        expect(intern).toEqual({name:'Patches', id: 463, email: 'TrustyPatches@gmail.com', school: 'School of Trickery',role: 'Intern'});
    });  

    it('should have the role return Intern when getRole is called', () => {
        expect(intern.getRole()).toEqual('Intern');
    }); 

    it('should return the engineer when getIntern is called', () => {
        expect(intern.getSchool()).toEqual(`${intern.school}`)
    });
});