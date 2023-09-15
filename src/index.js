import * as dotenv from "dotenv";

dotenv.config();

const getUserByEmail = () => {}
const createUser = () => {}
const authentication = () => {}
const random = () => {}
const getUserByUsername = () => {}

export const register = async (req, res) => {
    const { email, password, username } = req.body;

    return false;
    // try {
    //     const { email, password, username } = req.body
    //     if (!email || !password || !username) {
    //         return res.sendStatus(400).json({ message: 'test error' })
    //     }
    //
    //     const existingUser = await getUserByEmail(email)
    //     const existingUsername = await getUserByUsername(username)
    //     if (existingUser) {
    //         return res
    //         .sendStatus(400)
    //         .json({ message: 'This email is already in use.' })
    //     }
    //     if (existingUsername) {
    //         return res
    //         .sendStatus(400)
    //         .json({ message: 'This username is already taken.' })
    //     }
    //
    //     const salt = random()
    //     const user = await createUser({
    //         email,
    //         username,
    //         authentication: {
    //             salt,
    //             password: authentication(salt, password),
    //         },
    //     })
    //
    //     return res.status(201).json(user).end()
    // } catch (error) {
    //     console.log(error)
    //     return res.sendStatus(400).json({ message: 'catch error' })
    // }
}