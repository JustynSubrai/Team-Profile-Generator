const { TestWatcher } = require('jest');

test('creates a employee object', () => {
    const employee = new Employee('Sif');

    expect(employee.name).toBe('Sif');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('D1GaurdianSif@gmail.com');
});