const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.get("/", (req, res, next) => {
    res.send("Hello World")
})

const PORT = 3000

app.connect((error) => {
    if (error) {
        console.error(error)
    } else {
        console.log("success")
    }
})
app.listen(PORT)