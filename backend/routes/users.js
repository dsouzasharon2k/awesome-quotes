const express = require('express')
const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.get('/', (req,res) => {
    const sql = `SELECT * FROM user`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post('/',(req,res)=>{
    const sql = `Insert into user(firstname,lastname,email,password,phoneno,address) values(?,?,?,?,?,?)`
    const {firstname, lastname, email,password,phoneno,address} = req.body
    pool.query(sql,(error,data)=>{
         res.send(result.createResult(error, data))
    })
})

router.put('/',(req,res)=>{
    const sql = `Update user set pnoneno =? where uid =?`
    const {uid, phoneno} = req.body
    pool.query(sql, [mobile,uid],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.delete('/:id',(req,res)=>{
    const sql = `Delete from user where uid=?`
    const uid = req.params.id
    pool.query(sql,[uid],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports = router







