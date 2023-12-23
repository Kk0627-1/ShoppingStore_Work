const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: ['store', 'buyer']
    },
    Authorbuyer: {
        type: Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    Authorstore: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }


})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);