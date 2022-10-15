const user = require('../../models/Users')

function loggedCookie (req, res, next) {
    console.log('cookieMW')
    let loggedCookie = req.cookies.email
    console.log('loggedcookie')
    console.log(loggedCookie)
    let userFromCookie = user.findByField('email', loggedCookie)
    

    if (userFromCookie) {
        req.session.loggedUser = userFromCookie
        console.log('userFromCookie', userFromCookie)
    }

    next()

}

module.exports = loggedCookie