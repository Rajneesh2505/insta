const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        // validation:{
        //     validate:(value)=>{
               
        //         let special=["@","#","$","&"]
        //         special.forEach((char)=>{
        //             let valid=false;
        //             if(value.includes(char)){
        //                 valid=true
        //             }
        //         })
        //         return valid;
        //     },
        //     message:(props)=>{return `${props.value} have special symbols`}

        // }
    },
   phoneNumber:{
        type:Number,
        require:true,
        minLength:10,
        maxLength:10
    },
    password:{
      type:String,
      require:true,
      minLength:6
    }
})

const userModal=mongoose.model("users",userSchema)
module.exports=userModal