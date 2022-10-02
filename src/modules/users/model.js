const {fetch} = require("../../utils/postgres")

const LOGIN = ` SELECT * FROM users WHERE name = $1 AND password = $2`

const login = (name, password) => fetch(LOGIN, name, password)

module.exports = {
    login
}