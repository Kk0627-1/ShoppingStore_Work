const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Buyer = require('../models/Buyer');
const passport = require('passport');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const buyer = new Buyer({ buyername: username });
    await buyer.save();
    user.Authorbuyer = buyer;
    const registeredUser = await User.register(user, password);
    res.redirect('/shoppingstore/web');
    req.flash('Welcome to Yelp Camp!');


})

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    res.redirect('/shoppingstore/web');
})

router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/shoppingstore/web');
    });
})

module.exports = router;