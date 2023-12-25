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

    const orangeTshirt = new Commodity({
        title: 'toy Tshirt',
        image: '/image/og-T.jpg',
        price: 15,
        description: 'A good t-shirt',
        type: 'cloth'
    })
    await orangeTshirt.save();

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

    const mariocap = new Commodity({
        title: 'mariocap',
        image: '/image/mariocap.jpg',
        price: 7,
        description: 'A good mariocap',
        type: 'cap'
    })
    await mariocap.save();

    const nikecap = new Commodity({
        title: 'nikecap',
        image: '/image/nikecap.jpg',
        price: 7,
        description: 'A good nikecap',
        type: 'cap'
    })
    await nikecap.save();

    const polocap = new Commodity({
        title: 'polocap',
        image: '/image/polocap.jpg',
        price: 7,
        description: 'A good polocap',
        type: 'cap'
    })
    await polocap.save();

    const woolcap = new Commodity({
        title: 'woolcap',
        image: '/image/woolcap.jpg',
        price: 7,
        description: 'A good woolcap',
        type: 'cap'
    })
    await woolcap.save();

    const animaltoy = new Commodity({
        title: 'animaltoy',
        image: '/image/animaltoy.jpg',
        price: 7,
        description: 'A good animaltoy',
        type: 'toy'
    })
    await animaltoy.save();

    const appleFood = new Commodity({
        title: 'apple',
        image: '/image/apple.jpg',
        price: 7,
        description: 'A good apple',
        type: 'food'
    })
    await appleFood.save();

    const bananaFood = new Commodity({
        title: 'banana',
        image: '/image/banana.jpg',
        price: 7,
        description: 'A good banana',
        type: 'food'
    })
    await bananaFood.save();

    const guavaFood = new Commodity({
        title: 'guava',
        image: '/image/guava.jpg',
        price: 7,
        description: 'A good guava',
        type: 'food'
    })
    await guavaFood.save();

    const kiwiFood = new Commodity({
        title: 'kiwi',
        image: '/image/kiwi.jpg',
        price: 7,
        description: 'A good kiwi',
        type: 'food'
    })
    await kiwiFood.save();

    const lemonFood = new Commodity({
        title: 'lemon',
        image: '/image/lemon.jpg',
        price: 7,
        description: 'A good lemon',
        type: 'food'
    })
    await lemonFood.save();

    const pawpawFood = new Commodity({
        title: 'pawpaw',
        image: '/image/pawpaw.jpg',
        price: 7,
        description: 'A good pawpaw',
        type: 'food'
    })
    await pawpawFood.save();

    const watermelonFood = new Commodity({
        title: 'watermelon',
        image: '/image/watermelon.jpg',
        price: 7,
        description: 'A good watermelon',
        type: 'food'
    })
    await watermelonFood.save();

    const basketballshoes = new Commodity({
        title: 'basketballshoes',
        image: '/image/basketballshoes.jpg',
        price: 7,
        description: 'A good basketballshoes',
        type: 'shoes'
    })
    await basketballshoes.save();

    const highheel = new Commodity({
        title: 'highheel',
        image: '/image/highheel.jpg',
        price: 7,
        description: 'A good highheel',
        type: 'shoes'
    })
    await highheel.save();

    const leathershoes = new Commodity({
        title: 'leathershoes',
        image: '/image/leathershoes.jpg',
        price: 7,
        description: 'A good leathershoes',
        type: 'shoes'
    })
    await leathershoes.save();

    const sportshoes = new Commodity({
        title: 'sportshoes',
        image: '/image/sportshoes.jpg',
        price: 7,
        description: 'A good sportshoes',
        type: 'shoes'
    })
    await sportshoes.save();

    const greetingcard = new Commodity({
        title: 'greetingcard',
        image: '/image/greetingcard.jpg',
        price: 4,
        description: 'A good greetingcard',
        type: 'card'
    })
    await greetingcard.save();

}

seedDB().then(() => {
    console.log("Database cloth");
    mongoose.connection.close();
})


