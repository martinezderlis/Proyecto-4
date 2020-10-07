const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
    name:String,
    email:String, 
    phone:String,
    subject:String, 
    message:String
});

const contactoModel = mongoose.model('Usuario', contactoSchema);

module.exports = contactoModel;