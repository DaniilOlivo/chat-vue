const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const userDB = require("../db")

module.exports = () => {
    passport.use(new LocalStrategy((username, password, done) => {
        let result = userDB.find((user) => user.username === username)
        if (result) {
            if (result.password === password) return done(null, result)
            else return done(null, false)
        } else  return done(null, false)
    }))

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));
}
