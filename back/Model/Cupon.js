const mongoose = require('mongoose');

const cuponSchema = new mongoose.Schema({
    text:String, 
    discountPercentage:Number
});

const cuponModel = mongoose.model('Cupon',cuponSchema);

module.exports = cuponModel;