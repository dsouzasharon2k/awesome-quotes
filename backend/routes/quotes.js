const express = require('express')
const router = express.Router()
const db = require('../utils/db')
const createResult = require('../utils/result')


router.get('/',(req,res)=>{
    const sql = `Select * from qoute`
    db.query(sql,(error,result)=>{
       res.send(result.createResult(error,data))
    })
})


 router.post('/',(req,res)=>{
    const sql = `Insert into qoute(author,content,userId,createdTime)`
    const {author, content, userId,createdTime} = req.body
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })

 })


router.put('/',(req,res)=>{
    const sql = `Updated qoute set author =? where qid=?`
    const {qid, author} = req.body
    pool.query(sql, [qid, author],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.delete('/:id',(req,res)=>{
    const sql = `Delete from qoute where qid=?`
    const qid = req.params.id
    pool.query(sql,[qid],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports = router