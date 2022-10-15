function guestMiddleware (req, res, next) {
    if (req.session.loggedUser){
        return res.redirect('/usuario')
    }
    else{
    next()
    }
}

module.exports = guestMiddleware