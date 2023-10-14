const express = require("express")
const passport = require("passport")
const session = require('express-session')

const authSetup = require("./auth/setup")
const auth = require("./auth")

const app = express()
app.use(express.json())
app.use(session({secret: "SECRET"}))
app.use(passport.initialize())
app.use(passport.session())
authSetup()

app.use((req, res, next) => {
    console.log(req.url)
    next()
})
app.use("/auth", auth)

// app.get("/", (req, res) => {
//     res.send("Hello")
// })

module.exports = app
