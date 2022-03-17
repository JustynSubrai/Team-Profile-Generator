const { TestWatcher } = require('jest');

test('creates a engineer object', () => {
    const engineer = new Engineer('Velka')

    expect(engineer.name).toBe('Velka');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('GoddessofSin@gmail.com');
});