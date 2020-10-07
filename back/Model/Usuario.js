const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    token:String,
    name:String,
    email:String,
    sendEmail:Boolean
});

const UsuarioModel = mongoose.model('Usuario',usuarioSchema);

module.exports = UsuarioModel;