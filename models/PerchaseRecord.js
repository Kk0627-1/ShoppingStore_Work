const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PerchaseRecordSchema = new Schema({
    number: Number,
    size: String,
    shoppingDay: String,
    status: String,
    commoditys: {
        type: Schema.Types.ObjectId,
        ref: 'Commodity'
    }




})


module.exports = mongoose.model('PerchaseRecord', PerchaseRecordSchema);