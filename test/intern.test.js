const Intern = require(`../lib/intern`)

test('creates intern object', () => {
    const intern = new Intern("Jackson", 45, "barkerwjackson@gmail.com", "App State")

        expect(intern.school).toEqual("App State");
});

test('retrieves intern school', () => {
    const intern = new Intern("Jackson", 45, "barkerwjackson@gmail.com", "App State")

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})

test('employee role', () => {
    const intern = new Intern("Jackson", 45, "barkerwjackson@gmail.com", "App State");

        expect(intern.getRole()).toEqual('Intern');
});
