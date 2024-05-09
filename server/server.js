require("dotenv").config();
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const userController=require("./routes/user")
const multer=require("multer")()
const cors=require("cors")
const postController=require("./routes/post")


//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/insta")


//body parser middleware
app.use(express.json({limit:"10mb",extended:true}))
app.use(express.urlencoded({extended:false}))
app.use(multer.array())
app.use(cors())
//Server
const PORT= 3000
app.listen(PORT,(req,err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server start")
    }
})



//middleware
app.use("/user",userController)
app.use("/post",postController)