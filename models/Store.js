const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoreSchema = new Schema({
    storename: String,
    commodity: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Commodity'
        }

    ]

})


module.exports = mongoose.model('Store', StoreSchema);