const mongoose = require('mongoose');

const productoSchema =  new mongoose.Schema({
    title: String,
    description: String, 
    imgUrl: String, 
    inStock: Number, 
    price: Number,
    currency: String,
    discountPrice: Number
})
 
const productoModel = mongoose.model('Producto', productoSchema);

module.exports = productoModel;