const mongoose = require('mongoose');
const Commodity = require('../models/commodity');
const HotCommodity = require('../models/HotCommodity');
const ControllerManagementSystem = require('../models/ControllerManagementSystem');
mongoose.connect('mongodb://127.0.0.1:27017/practice-shopping-store');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    const controllerSystem = await ControllerManagementSystem.find({});
    const commoditys = await Commodity.find({});
    for (let commodity of commoditys) {
        let hotCommodity = new HotCommodity({ perchase_num: 0, Love_num: 0, click_num: 0 });
        hotCommodity.commodity = commodity;
        await hotCommodity.save();
        controllerSystem[0].hotCommodity.push(hotCommodity);
    }


    await controllerSystem[0].save();
}

seedDB().then(() => {
    mongoose.connection.close();
})


