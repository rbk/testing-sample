const { register } =require("../index.js");

describe('register', () => {

    it('should return an error if the username is taken', async () => {

        const actualResult = await register({
            body: {
                email: 'richard@email',
                username: 'richard',
                password: 'cats'
            }
        })

        console.log(actualResult)

        expect(actualResult).toBeFalsy()


    });

})