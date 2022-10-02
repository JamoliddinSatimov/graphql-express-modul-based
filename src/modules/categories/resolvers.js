const { AuthenticationError } = require('apollo-server-express')
const model = require('./model')
const subCategories = require("../subcategories/model")

module.exports = {
    Query: {
        categories: async() => await model.getCategories()
    },

    Mutation: {
        category: async (_, { id }) => {
            try {

                if (!id) {
                    return new AuthenticationError("input value invalid")
                }

                return await model.getCategory(id)
            } catch (error) {
                console.log(error);
            }
        }
    },

    Category: {
        id: g => g.category_id,
        title: g => g.category_title,
        subcategories: async g => await subCategories.categoryById(g.category_id),
        createdAt: g => g.created_at
    }
}