const { ApolloServer } = require("apollo-server-express")
const http = require("http")
const express = require("express")
const app = express()
const router = require("./express")
const modules = require('./modules')
const PORT = process.env.PORT || 5050 

app.use(express.json())

const server = new ApolloServer({
    modules,
    context: ({ req }) => {
        return req.headers
    }
})

server.applyMiddleware({ app })
app.use("/", router)



const httpServer = http.createServer(app)

httpServer.listen(PORT, () => {
    console.log(PORT + server.graphqlPath)
})