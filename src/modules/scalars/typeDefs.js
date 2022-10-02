const { gql } = require("apollo-server-express")

const typeDefs = gql`
    scalar Date
    scalar LoggedIn
`

module.exports = { typeDefs }
