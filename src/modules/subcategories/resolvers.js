const model = require("./model")

module.exports = {
    Mutation: {
        subCategories: async(_, { id }) => {
            try {
                return await model.categoryById(id)
            } catch (error) {
                console.log(error);
            }
        } 
    },

    subCategories: {
        id: g => g.subcategory_id,
        title: g => g.subcategory_title,
        categoryId: g => g.categoryid
    }
}