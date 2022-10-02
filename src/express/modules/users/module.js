const model = require("./model")
module.exports = {
    GET: async(_,res) => {
        try {
            
            const data = await model.getUsers()

            return res.json({
                success:true,
                data
            })

        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}