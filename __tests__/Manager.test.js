const { TestWatcher } = require('jest');

test('creates a manager object', () => {
    const manager = new Manager('Gwyn')

    expect(manager.name).toBe('Gwyn');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('LordofCinder@gmail.com');
});