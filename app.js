const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const Buyer = require('./models/Buyer');
const ControllerManagementSystem = require('./models/ControllerManagementSystem');
const userRoutes = require('./routes/users');
const shoppingStoreRoutes = require('./routes/shopping-store');
const storeRoutes = require('./routes/store');
const ShoppingmallManagementSystem = require('./routes/ShoppingmallManagementSystem');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-store');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));


const sessionConfig = {
    secret: 'thisshouldbebettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


app.use(express.static(path.join(__dirname, 'public')))

app.use(session(sessionConfig))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(async (req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use('/', userRoutes);
app.use('/shoppingstore/controller', ShoppingmallManagementSystem);
app.use('/shoppingstore/store', storeRoutes);
app.use('/shoppingstore', shoppingStoreRoutes);


app.get('/fakeUser', async (req, res) => {
    const buyer = new Buyer({ buyername: 'kevin' });
    await buyer.save();
    const user = new User({
        email: 'kevin@gmail.com',
        username: 'kevin',
        category: 'buyer'
    });
    user.author.push(buyer);
    const newUser = await User.register(user, 'k0627123');
})


app.listen(2500, () => {
    console.log('Serving on port 3000');
})
