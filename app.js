const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))
mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = {
    email: String,
    password: String
}

const User = new mongoose.model("User", userSchema)

app.get("/", (req, res) => {
    res.render("home")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.post("/register", (req, res) => {
    const newUser = {
        email: req.body.username,
        password: req.body.password
    }

    
})

app.listen(3000, function () {
    console.log("Server started on port 3000")
})