const { gql } = require("apollo-server-express")

module.exports = gql`

    type subCategories {
        id:ID!,
        title:String!,
        categoryId: Date!
    }

    extend type Mutation {
        subCategories(id:ID!): [subCategories]
    }

`