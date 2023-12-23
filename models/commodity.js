const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommoditySchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    type: String,
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }




})


module.exports = mongoose.model('Commodity', CommoditySchema);