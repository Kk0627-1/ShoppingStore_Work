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

    const computer = new Commodity({
        title: 'computer',
        image: '/image/computer.jpg',
        price: 1500,
        description: 'A good computer',
        type: '3c_product'
    })
    await computer.save();

    const earphone = new Commodity({
        title: 'earphone',
        image: '/image/earphone.jpg',
        price: 300,
        description: 'A good earphone',
        type: '3c_product'
    })
    await earphone.save();

    const mouse = new Commodity({
        title: 'mouse',
        image: '/image/mouse.jpg',
        price: 120,
        description: 'A good mouse',
        type: '3c_product'
    })
    await mouse.save();

    const comic = new Commodity({
        title: 'comic',
        image: '/image/comic.jpg',
        price: 70,
        description: 'A good comic',
        type: 'book'
    })
    await comic.save();

    const novel = new Commodity({
        title: 'novel',
        image: '/image/novel.jpg',
        price: 85,
        description: 'A good novel',
        type: 'book'
    })
    await novel.save();

    const AIE_T = new Commodity({
        title: 'AIE-Tshirt',
        image: '/image/AIE-T.jpg',
        price: 15,
        description: 'A good AIE-Tshirt',
        type: 'cloth'
    })
    await AIE_T.save();

    const NewYear_T = new Commodity({
        title: '新年吉祥Tshirt',
        image: '/image/新年吉祥-T.jpg',
        price: 15,
        description: 'A good 新年吉祥Tshirt',
        type: 'cloth'
    })
    await NewYear_T.save();

    const Original_T = new Commodity({
        title: 'Original-Tshirt',
        image: '/image/Original-T.jpg',
        price: 15,
        description: 'A good Original-Tshirt',
        type: 'cloth'
    })
    await Original_T.save();

    const MEN_T = new Commodity({
        title: 'MEN-Tshirt',
        image: '/image/MEN-T.jpg',
        price: 15,
        description: 'A good MEN-Tshirt',
        type: 'cloth'
    })
    await MEN_T.save();

    const BALENCIAGA_T = new Commodity({
        title: 'BALENCIAGA-Tshirt',
        image: '/image/BALENCIAGA-T.jpg',
        price: 15,
        description: 'A good BALENCIAGA-Tshirt',
        type: 'cloth'
    })
    await BALENCIAGA_T.save();

}

seedDB().then(() => {
    console.log("Database cloth");
    mongoose.connection.close();
})


