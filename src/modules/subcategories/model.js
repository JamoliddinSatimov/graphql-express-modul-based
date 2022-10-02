const {fetchAll} = require("../../utils/postgres")


const CATEGORY_BY_ID = `SELECT * FROM subCategories WHERE categoryid = $1`

const categoryById = (id) => fetchAll(CATEGORY_BY_ID, id)

module.exports = {
    categoryById
}