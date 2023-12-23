const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BuyerSchema = new Schema({
    buyername: String,
    purchaseRecord: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PerchaseRecord'
        }
    ],
    shopCar: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PerchaseRecord'
        }
    ],
    lovelist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Commodity'
        }
    ]


})


module.exports = mongoose.model('Buyer', BuyerSchema);
