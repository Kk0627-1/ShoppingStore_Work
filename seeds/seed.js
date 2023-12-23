const mongoose = require('mongoose');
const Commodity = require('../models/commodity');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-store');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const seedDB = async () => {
    /*
    const highheel = new Commodity({
        title: 'High heel',
        image: '/image/highheel.jpg',
        price: 9,
        description: 'great High heel',
        type: 'shoes'
    })
    await highheel.save();
   */
    const greetingCard = new Commodity({
        title: 'greetingcard',
        image: '/image/greetingcard.jpg',
        price: 4,
        description: 'great greeting Card',
        type: 'card'
    })
    await greetingCard.save();

}


seedDB().then(() => {
    console.log("Database cloth");
    mongoose.connection.close();
})


