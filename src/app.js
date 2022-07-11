const path=require('path');

require('dotenv').config()

const express=require('express')
const app=express();

app.get('/',function (solucitud,respuesta){
respuesta.send('<h1>bienvenido!!!!!</h1>');
});

app.get('/contacto',function (solucitud,respuesta){
    respuesta.sendFile(path.join(__dirname,'views/index.html'))
});

app.listen(process.env.PUERTO,function() {
    console.log('servidor iniciado en puerto:'+process.env.PUERTO)
})  