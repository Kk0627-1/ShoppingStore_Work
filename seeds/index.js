const mongoose = require('mongoose');
const Commodity = require('../models/commodity');
const HotCommodity = require('../models/HotCommodity');
const ControllerManagementSystem = require('../models/ControllerManagementSystem');
mongoose.connect('mongodb://127.0.0.1:27017/shopping-store');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    const controllerSystem = new ControllerManagementSystem({});
    const commoditys = await Commodity.find({});
    for (let commodity of commoditys) {
        let hotCommodity = new HotCommodity({ perchase_num: 0, Love_num: 0, click_num: 0 });
        hotCommodity.commodity = commodity;
        await hotCommodity.save();
        controllerSystem.hotCommodity.push(hotCommodity);
    }


    await controllerSystem.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})


