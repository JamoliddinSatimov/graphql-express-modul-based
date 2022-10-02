const jwt = require("jsonwebtoken")
const model = require("./model")

module.exports = {
    Query: {
        books: async (_, {}, {token}) => {
            try {

                if (!token) {
                    return new Error("token did not exists")
                }
                
                const arr = []

                await jwt.verify(token, "1q2w3e4r", async(err, decode) => {
                    if (err instanceof jwt.JsonWebTokenError) {
                        
                        return new Error("token invalid")
                    }

                    console.log(decode.id);

                    const books = await model.getBooksById(decode.id)

                    arr.push(...books)

                })

                return arr

            } catch (error) {
                console.log(error);
            }
        }
    },

    Books: {
        id: g => g.id,
        title: g => g.title,
        price: g => g.price
    }
}