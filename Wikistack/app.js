const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const syncObjects = require("./models/index");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
const path = require('path');
const app = express()
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname + "./public")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use("/wiki", wikiRouter)
app.use("/user", userRouter)

app.get("/",  (req, res, next) => {
    res.send("Home page")
})


const PORT = 3000

app.connect((error) => {
    if (error) {
        console.error(error)
    } else {
        console.log("success")
    }
})
const syncObjectsFunc = async () => {
        await syncObjects.db.sync({force: true})
  app.listen (PORT)
}
syncObjectsFunc()

// db.authenticate().then(() => {console.log("connected to the database")})

