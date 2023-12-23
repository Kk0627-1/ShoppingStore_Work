const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HotCommoditySchema = new Schema({
    commodity: {
        type: Schema.Types.ObjectId,
        ref: 'Commodity'
    },
    perchase_num: Number,
    Love_num: Number,
    click_num: Number


})


module.exports = mongoose.model('HotCommodity', HotCommoditySchema);