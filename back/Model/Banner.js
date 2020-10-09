const mongoose = require('mongoose');


const bannerSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    link:String
});

const BannerModel = mongoose.model('Banner', bannerSchema);
module.exports = BannerModel;