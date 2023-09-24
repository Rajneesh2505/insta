const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
   location:{
        type:String,
        require:true,
    },
    description:{
      type:String,
      require:true,
    },
    PostImage:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

const postModal=mongoose.model("posts",postSchema)
module.exports=postModal