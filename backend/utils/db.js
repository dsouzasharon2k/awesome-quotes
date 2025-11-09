const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'kd1-', //to be edited
  password: 'manager',
  database: 'quote_db'
})

module.exports = pool
