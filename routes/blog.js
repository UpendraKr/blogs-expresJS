const express = require('express')
const router = express.Router()
const path = require("path")
const myblogs = require("../data/blogs")


router.get('/', (req, res) =>{
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('./home');
})

router.get('/blog', (req, res) =>{
    myblogs.forEach(e => {
        console.log(e.title)
    });
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
    res.render('./blogHome', {
        blogs: myblogs
    });
})

router.get('/blogpost/:slug', (req, res) =>{
    blog = myblogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    // console.log(blog)
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
    res.render('./blogPage', {
        title: blog[0].title,
        content: blog[0].content
    });
})

module.exports = router