
require('dotenv').config()

const express=require('express')
const app=express();

app.listen(process.env.PUERTO,function() {
    console.log('servidor iniciado en puerto:'+process.env.PUERTO)
})  