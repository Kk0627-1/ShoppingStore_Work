const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Buyer = require('../models/Buyer');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');

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
    req.login(registeredUser, err => {
        if (err) return next(err);
        res.redirect('/shoppingstore/web');
        req.flash('Welcome to Yelp Camp!');
    })


})

router.get('/login', (req, res) => {
    res.render('users/login');
})


router.post('/login',
    // use the storeReturnTo middleware to save the returnTo value from session to res.locals
    storeReturnTo,
    // passport.authenticate logs the user in and clears req.session
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
    // Now we can use res.locals.returnTo to redirect the user after login
    (req, res) => {
        req.flash('success', 'Welcome back!');
        const redirectUrl = res.locals.returnTo || '/shoppingstore/web'; // update this line to use res.locals.returnTo now
        if (redirectUrl.indexOf('addToLovelist') != -1) {
            res.redirect(redirectUrl.slice(0, redirectUrl.indexOf('addToLovelist') - 1));
        } else if (redirectUrl.indexOf('addToshopcar') != -1) {
            res.redirect(redirectUrl.slice(0, redirectUrl.indexOf('addToshopcar') - 1));
        } else {
            res.redirect(redirectUrl);
        }

    });

router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/shoppingstore/web');
    });
})

module.exports = router;
