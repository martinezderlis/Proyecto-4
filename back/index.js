
//Coneccion con mongodb
const connectionString = "mongodb+srv://guayerd:guayerd.2020@cluster0.jufx9.mongodb.net/Guayerd_Bikes?retryWrites=true&w=majority"
//Puerto
const PORT = "4200"
//Importo el modelo
const Usuario = require('./Model/Usuario')
const Banner = require('./Model/Banner')
const Contacto = require('./Model/Contacto')
const Cupon = require('./Model/Cupon')
const Producto = require('./Model/Producto')
//Importo dependencias
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const uniqid = require('uniqid')
//const morgan = require('combined')
//Instancio app express
const app = express()
//Body Parser
app.use(express.json())
app.use(cors())
//Ping
app.get('/',function(req,res){
    res.status(200).send({message:"Server Funcionando"})
})

//GET Usuarios por Id
app.get('/user/:id',function(req,res){
    const ID = req.params.id
    Usuario.findById(ID).then(function(userFinded){
        console.log(ID)
        console.log(userFinded)
        return  res.status(200).send({usuario:userFinded})
    }).catch(function(err){
        return res.status(500).send({error:err})
    })
})
//GET Banner
app.get('/banner', function(req,res){
    Banner.find().then(function(bannerFinded){
        console.log(bannerFinded)
        return res.status(200).send(bannerFinded)
    })
})
//GET Contacto por Id
app.get('/contactos/:id', function(req,res){
    let ID = req.params.id
    Contacto.findById(ID).then(function(contactoFinded){
        console.log(contactoFinded)
        return res.status(200).send({contacto:contactoFinded})
    }).catch(function(err){
        return res.status(500).send({error:err})
    })
})
//GET Cupones all y por Id
app.get('/cupones',function(req,res){
    Cupon.find().then(function(cuponFinded){
        console.log(cuponFinded)
        return res.status(200).send(cuponFinded)
    }).catch(function(err){
        return res.status(500).send({error:err})
    })
})
app.get('/cupones/:id',function(req,res){
    let ID = req.params.id
    Cupon.findById(ID).then(function(cupon){
        console.log(cupon)
        return res.status(200).send(cupon)
    })
})
//GET Productos all y por Id
app.get('/productos',function(req,res){
    Producto.find().then(function(productos){
        return res.status(200).send(productos)
    })
})
app.get('/productos/:id',function(req,res){
    let ID = req.params.id
    Producto.findById(ID).then(function(producto){
        return res.status(200).send({producto:producto})
    })
})
//POST Usuario
app.post('/user',function(req,res){
    let newUser = new Usuario({
        token: req.body.token,
        name:req.body.name,
        email:req.body.email,
        sendEmail:true
    })
    newUser.save().then(function(userSaved){
       console.log(userSaved)
        return res.status(200).send({usuario:userSaved})
    }).catch(function(err){
        return res.status(500).send({error:err})
    })
})

//POST Contacto
app.post('/contactos',function(req,res){
    let newContacto = new Contacto({
    name:req.body.name,
    email:req.body.email, 
    phone:req.body.phone,
    subject:req.body.subject, 
    message:req.body.message
    })
    newContacto.save().then(function(contactoSaved){
        console.log(contactoSaved)
        return res.status(200).send(contactoSaved)
    }).catch(function(err){
        return res.status(500).send({error:"Error en la carga de datos"})
    })
})



mongoose.connect(connectionString,function(err){
    if(err){
        console.log(err.mensaje)
    }else{
        console.log("Conexion establecida")
        app.listen(PORT, function(){
            console.log("Server Express Listening")
        })
    }
})




