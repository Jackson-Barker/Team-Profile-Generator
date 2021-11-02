const Engineer = require(`./lib/engineer`)

test('creates engineer object', () => {
    const engineer = new engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker")

        expect(engineer.gitHub).toEqual(expect.any(string));
});

test('retrieves engineer github account name', () => {
    const engineer = new engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker")

        expect(engineer.gitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString));
})

test('employee role', () => {
    const engineer = new engineer("Jackson", 45, "barkerwjackson@gmail.com", "Jackson-Barker");

        expect(engineer.getRole()).toEqual('engineer');
})