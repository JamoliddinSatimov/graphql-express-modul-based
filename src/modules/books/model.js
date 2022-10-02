const {fetchAll} = require("../../utils/postgres")

const Books = `select id, title, price from books where user_id = $1`

const getBooksById = id => fetchAll(Books, id)

module.exports = {
    getBooksById
}