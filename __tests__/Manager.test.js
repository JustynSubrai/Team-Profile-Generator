const Manager = require('../lib/Manager.js');

describe('creates a intern object', () => {
    const manager = new Manager('Gwyn', 198, 'LordofCinders@gmail.com', 312798, 'Manager');

    it('should create a new class named Manager with 5 properties', () => {

        expect(manager).toEqual({name:'Gwyn', id: 198, email: 'LordofCinders@gmail.com', officeNum: 312798, role: 'Manager'});
    });

    it('should have the role return manager when getRole is called', () => {
        expect(manager.getRole()).toEqual('Manager');
    });  

    it('should return the managers office number when getOfficeNum is called', () => {
        expect(manager.getOfficeNum()).toEqual(`${manager.officeNum}`);
    });
});