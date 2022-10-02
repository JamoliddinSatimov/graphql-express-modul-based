const { Pool } = require('pg')

const pool = new Pool({
    connectionString:"postgres://postgres:123456@localhost:5432/n26"
})

const fetchAll = async(SQL, ...params) => {
    const client = await pool.connect()

    try {
        
        const { rows } =  await client.query(SQL, params?.length?params:null)
        return rows

    }finally {
        client.release()
    }

}

const fetch = async(SQL, ...params) => {
    const client = await pool.connect()

    try {
        
        const { rows : [row] } =  await client.query(SQL, params?.length?params:null)
        return row

    }finally {
        client.release()
    }

}

module.exports = {
    fetch,
    fetchAll
}