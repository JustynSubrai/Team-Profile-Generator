const { TestWatcher } = require('jest');

test('creates a intern object', () => {
    const intern = new Intern('Patches')

    expect(intern.name).toBe('Patches');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('TrustyPatches@gmail.com');
});