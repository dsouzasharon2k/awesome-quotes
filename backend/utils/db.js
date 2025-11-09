const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'kd1-pooja-92470', 
  password: 'manager',
  database: 'quotes_db'
})

module.exports = pool
