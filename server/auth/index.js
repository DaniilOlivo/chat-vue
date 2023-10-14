const express = require("express")
const passport = require("passport")

const userDB = require("../db")

let router = express.Router()

router.post("/register", (req, res) => {
    userDB.push(req.body)
    res.sendStatus(200)
})

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.sendStatus(200)
})

router.post("/logout", (req, res) => {
    req.logout(() => res.send(200))
})

module.exports = router
