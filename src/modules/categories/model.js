const { fetch, fetchAll } = require("../../utils/postgres")


const GET_CATEGORIES = `SELECT * FROM categories`
const GET_CATEGORY = `SELECT * FROM categories where category_id = $1`


const getCategories = () => fetchAll(GET_CATEGORIES)
const getCategory = id => fetch(GET_CATEGORY, id)

module.exports = {
    getCategories,
    getCategory
}