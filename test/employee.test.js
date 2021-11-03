const Employee = require(`../lib/employee`)

test('creates employee object', () => {
    const employee = new Employee("Jackson", 45, "barkerwjackson@gmail.com")

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
});

test('retrieves employee name', () => {
    const employee = new Employee("Jackson", 45, "barkerwjackson@gmail.com")

        expect(employee.name).toEqual(expect.any(String));
})

test('retrieves employee email', () => {
    const employee = new Employee("Jackson", 45, "barkerwjackson@gmail.com")

        expect(employee.email).toEqual(expect.any(String));
})

test('retrieves employee id', () => {
    const employee = new Employee("Jackson", 45, "barkerwjackson@gmail.com")

        expect(employee.id).toEqual(expect.any(Number));
})

test('employee role', () => {
    const employee = new Employee("Jackson", 45, "barkerwjackson@gmail.com");

        expect(employee.getRole()).toEqual('Employee');
})