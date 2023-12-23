const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderRecordSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    record:
    {
        type: Schema.Types.ObjectId,
        ref: 'PerchaseRecord'
    }



})


module.exports = mongoose.model('OrderRecord', OrderRecordSchema);