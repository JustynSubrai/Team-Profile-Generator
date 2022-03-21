class Employee {
    constructor(name, id, email, role) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = role;
    };

    getName() {
        return `${this.name}`;
    };

    getId(insertId) {
        if (insertId === '') {
            console.log('Please insert ID number.')
            return;
        } else {
            insertId = this.id;
            return `${this.id}`;
        }
    };

    getEmail(insertEmail) {
        if (insertEmail === '') {
            console.log('Please insert email address.')
            return;
        } else {
            insertEmail = this.email;
            return `${this.email}`;
        }
    };
// Returns 'Employee'
    getRole() {
        role = 'Employee';
        return `${this.role}`;
    };
};

module.exports = Employee;