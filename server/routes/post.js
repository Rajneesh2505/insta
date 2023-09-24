const express=require("express")
const route=express.Router()
const postModal=require("../module/post-modal")
const { reset } = require("nodemon")


route.post("/postview",(req,res)=>{
    postModal.create({name:req.body.name,location:req.body.location,description:req.body.description,PostImage:req.body.PostImage,date:new Date()})
    res.send("data added")
})


route.get("/posts",(req,res)=>{
   postModal.find().then((userdata)=>{
        res.send(userdata)
    }).catch((err)=>{
        res.send(err.message)
    })
})

module.exports=route

    
