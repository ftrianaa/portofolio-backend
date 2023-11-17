const Pool = require("pg").Pool
const pool = new Pool({
     user: "postgres",
     host: "localhost",
     port: 5432,
     database: "portofolio",
     password: "batan30"
})
module.exports = {
     pool
}