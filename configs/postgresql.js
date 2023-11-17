const Pool = require("pg").Pool
const pool = new Pool({
     user: process.env.PG_USER,
     host: process.env.PG_HOST,
     port: process.env.PG_PORT,
     database: process.env.PG_DB,
     password: process.env.PG_PASSWORD
})
module.exports = {
     pool
}