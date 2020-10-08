
//Coneccion con mongodb
const connectionString = "mongodb+srv://guayerd:guayerd.2020@cluster0.jufx9.mongodb.net/Guayerd-Bikes?retryWrites=true&w=majority"
//Puerto
const PORT = "4200"
//Importo el modelo
const Usuario = require('./Model/Usuario')
//Importo dependencias
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const uniqid = require('uniqid')
const morgan = require('combined')
//Instancio app express
const app = express()
//Body Parser
app.use(express.json())

//Ping
app.get('/',function(req,res){
    res.status(200).send({message:"Server Funcionando"})
})

//GET By Id
app.get('/user/:id',function(req,res){
    const ID = req.params.id
    Usuario.findById(ID).then(function(userFinded){
      return  res.status(200).send({usuario:userFinded})
    }).catch(function(err){
        return res.status(500).send({error:err})
    })
})

//POST
app.post('/user',function(req,res){
    
})



