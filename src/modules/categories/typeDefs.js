const { gql } = require('apollo-server-express')
module.exports = gql`
    type Category {
        id:ID!
        title:String!
        subcategories:[ subCategories ]
        createdAt:Date!
    }

    extend type Query {
        categories:[ Category ]
    }

    type Mutation {
        category(id:ID!):Category
    }
`