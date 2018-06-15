const {Page} = require("../models/index")
const {User} = require('../models/index')
const addPage = require("../views/addPage");
const express = require("express");
const router = express.Router()

router.get("/", (req, res, next) => {
    res.redirect("../")
})

function slugify(slug) {
    var arr = slug.split("")
    console.log(arr)
    return arr.map((item) => {
        if (item == " ") {
          console.log("asdfasdf")
            return "_"
        } else {
            return item
        }
    }).join("")
}
// Page.beforeValidate(((instance, options) => {
//     instance.slug = slugify(req.body.title)
// })) 

router.post("/",  async(req, res, next) => {
    const page = new Page({
        title: req.body.title,
        slug: slugify(req.body.title),
        content: req.body.textArea,
        status: req.body.status
    })
   

    const user = new User({
        name: req.body.name,
        email: req.body.email
        
    })

    try{
        console.log(user)
        await page.save();
        await user.save();
        res.redirect('/');
    } catch (error) { next(error) }
})

// router.post("/", (req, res, next) => {
    
//     res.send(req.body)
// })


router.get("/add", (req, res, next) => {
    res.send(addPage())
})

module.exports = router










