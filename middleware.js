module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; // add this line
        req.flash('error', '尚未登入,請先登入!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isLoggedInStore = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl; // add this line
        req.flash('error', '尚未登入,請先登入!');
        return res.redirect('/shoppingstore/store/login');
    }
    next();
}
