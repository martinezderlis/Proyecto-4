const mongoose = require('mongoose');
const UsuarioModel = require('./Usuario');

const bannerSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    link:String
});

const bannerModel = mongoose.model('Banner', bannerSchema);
module.exports = bannerModel;