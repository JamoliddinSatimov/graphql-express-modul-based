const Categories = require("./categories")
const Subcategories = require("./subcategories")
const typeDefs = require("./scalars")
const Users = require("./users")
const Books = require("./books")



module.exports = [ 
    Categories,
    Subcategories,
    Users,
    Books,
    typeDefs
 ]