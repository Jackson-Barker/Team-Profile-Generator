const Manager = require(`../lib/manager`)

test('creates manager object', () => {
    const manager = new Manager("Jackson", 45, "barkerwjackson@gmail.com", 65)

        expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('employee role', () => {
    const manager = new Manager("Jackson", 45, "barkerwjackson@gmail.com", "65");

        expect(manager.getRole()).toEqual('manager');
});