const mongoose = require('mongoose');
const Commodity = require('../models/commodity');
const Store = require('../models/Store');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-store');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const storename = async () => {
    const commoditys = await Commodity.find({});
    //console.log(commoditys[0])
    const store = new Store({ storename: 'uu_store' });
    store.save();

    let item = new Commodity({});
    for (let commodity of commoditys) {
        item = await Commodity.findById(commodity._id);
        item.store = store;
        await item.save();
    }

    console.log(commoditys);
}

storename().then(() => {
    console.log("Database cloth");
    mongoose.connection.close();
})


