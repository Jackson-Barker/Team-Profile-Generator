const Engineer = require(`../lib/engineer`)

test('creates engineer object', () => {
    const engineer = new Engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker")

        expect(engineer.github).toEqual("Jackson-Barker");
});

test('retrieves engineer github account name', () => {
    const engineer = new Engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker")

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
})

test('employee role', () => {
    const engineer = new Engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker");

        expect(engineer.getRole()).toEqual('Engineer');
});
