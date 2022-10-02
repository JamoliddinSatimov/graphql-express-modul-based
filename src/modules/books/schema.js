const {gql} = require("apollo-server-express")

module.exports = gql`

    type Books {
        id: ID!
        title: String!
        price: Int!
    }

    extend type Query {
        books: [Books]
    }
`