const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const port =process.env.PORT || 3000
const {sequelize} = require('./models')


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,async()=>{
    // console.log(`Example app listening on Port ${port}`)
    await sequelize.sync({alter:true})
})