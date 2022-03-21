const Employee = require('./employee.js')

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
    super(name, id, email)

        this.officeNum = officeNum,
        this.role = 'Manager';
    };

    getOfficeNum() {
        return `${this.officeNum}`
    };

// Overridden to return 'Manager'
    getRole() {
        return `${this.role}`
    };
};

module.exports = Manager;