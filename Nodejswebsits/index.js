const express = require("express")
const app = express()
const path = require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")))
app.get("/",(req,res) => {
 res.render("index")
 console.log("worked")
})
app.post("/about",(req,res) => {
    res.render("index1")
})
app.post("/email",(req,res) => {
res.render("index2")
})
app.listen(3000)