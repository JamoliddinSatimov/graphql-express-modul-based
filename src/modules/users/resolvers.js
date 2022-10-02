const {UserInputError, AuthenticationError} = require("apollo-server-express")

const {sign} = require("../../utils/jwt")
const model = require("./model")

module.exports = {
    Mutation: {
        login: async(_, {name,password}) => {
            try {

                if (!name || !password) {
                    return new UserInputError("invalid input")
                }

                const user = await model.login(name, password)

                if (!user) {
                    return new AuthenticationError("user did not exists")                   
                }

                const token = sign({id: user.id})

                return {
                    message: 'Logged in',
                    token
                }

            } catch (error) {
                console.log(error);
            }
        }
    }
}