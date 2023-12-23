const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');
const User = require('../models/User')
const PerchaseRecord = require('../models/PerchaseRecord');
const { isLoggedIn } = require('../middleware');
const Buyer = require('../models/Buyer');
const Store = require('../models/Store');
const passport = require('passport');
const { any } = require('joi');

router.get('/', async (req, res) => {
    res.render('store/index');
})

router.get('/register', async (req, res) => {
    res.render('store/register');
})

router.get('/login', async (req, res) => {
    res.render('store/login');
})

router.get('/showCommodity', async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate("Authorstore");
    const store = await Store.findById(user.Authorstore._id).populate("commodity");
    res.render('store/store', { store });
})

router.get('/addCommodity', async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate("Authorstore");
    const store = await Store.findById(user.Authorstore._id).populate("commodity");
    res.render('store/new', { store });
})

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const store = new Store({ storename: username });
    await store.save();
    user.Authorstore = store;
    const registeredUser = await User.register(user, password);
    res.redirect('/shoppingstore/store');
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/shoppingstore/store/login' }), (req, res) => {
    res.redirect('/shoppingstore/store');
})

router.post('/:id/addCommodity', async (req, res) => {
    const { title, image, price, type, description } = req.body;
    const commodity = new Commodity({
        title: title,
        image: image,
        price: price,
        type: type,
        description: description
    })
    const { id } = req.params;
    const store = await Store.findById(id);
    commodity.store = store;
    await commodity.save();
    store.commodity.push(commodity);
    await store.save();
    res.redirect("/shoppingstore/store");
})

router.post('/deleteCommodity', async (req, res) => {

})


router.get('/openStore', async (req, res) => {
    res.render('store/creat');
})

router.post('/delete', async (req, res) => {

})



module.exports = router;