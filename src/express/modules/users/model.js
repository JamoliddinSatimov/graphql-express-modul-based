const { fetchAll } = require("../../../utils/postgres")

const GET_users = `select * from users`

const getUsers = () => fetchAll(GET_users)

module.exports = {
    getUsers
}