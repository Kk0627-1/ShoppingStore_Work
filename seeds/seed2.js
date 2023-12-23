const mongoose = require('mongoose');
const Commodity = require('../models/commodity');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-store');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const seedDB = async () => {
    const blueTshirt = new Commodity({
        title: 'blue Tshirt',
        image: '/image/bl-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await blueTshirt.save();

    const blackTshirt = new Commodity({
        title: 'black Tshirt',
        image: '/image/bk-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await blackTshirt.save();

    const toyTshirt = new Commodity({
        title: 'toy Tshirt',
        image: '/image/toy-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await toyTshirt.save();

    const vanshirt = new Commodity({
        title: 'van Tshirt',
        image: '/image/van-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await vanshirt.save();

    const whiteshirt = new Commodity({
        title: 'white Tshirt',
        image: '/image/wt-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await whiteshirt.save();

}

seedDB().then(() => {
    console.log("Database cloth");
    mongoose.connection.close();
})


