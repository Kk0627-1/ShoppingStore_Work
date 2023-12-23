const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ControllerManagementSystemSchema = new Schema({
    orderRecord: [
        {
            type: Schema.Types.ObjectId,
            ref: 'OrderRecord'
        }
    ],
    hotCommodity: [
        {
            type: Schema.Types.ObjectId,
            ref: 'HotCommodity'
        }
    ]


})


module.exports = mongoose.model('ControllerManagementSystem', ControllerManagementSystemSchema);