const Employee = require('../lib/Employee.js');

describe('creates a employee object', () => {
    const employee = new Employee('Sif', 312, 'D1GuardianSif@gmail.com', 'Employee');

    it('should create a new class named Employee with 4 properties', () => {

        expect(employee).toEqual({name:'Sif', id: 312, email: 'D1GuardianSif@gmail.com', role: 'Employee'});
    });  

    describe('names', () => {

        it('should return a value for the employees name', () => { 
            expect(employee.name).toEqual('Sif');
        }); 
    });

    describe('id number', () => {
        it('should return a number that represents the employees id', () => {
            expect(employee.id).not.toBeNaN;
        });
        
    });

    describe('email', () => {
        it('should return a valid email address in a string containing @', () => {
            expect(employee.email).toContain('@');
        }); 

    });

    describe('get functions', () => {
        it('should fetch the employees name when getName is called', () =>
        {
            expect(employee.getName()).toEqual(`${employee.name}`)
        });

        it('should fetch the employees ID when getId is called', () =>{
            expect(employee.getId()).toEqual(`${employee.id}`);
        });

        it('should fetch the employees email address when getEmail is called', () => {
            expect(employee.getEmail()).toEqual(`${employee.email}`);
        });
    });
});