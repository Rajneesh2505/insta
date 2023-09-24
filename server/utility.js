const userdata=require("./module/user-module")
const bcrypt=require("bcryptjs")

const validUser=async(userName)=>{
    let validuser=false;
   await  userdata.find({username:userName}).then((data)=>{
        if(data.length){
           validuser=true;
        }
     })
     return validuser;
}

const hashPass=async(password)=>{
    let salt=10;
 return new Promise((resolve,reject)=>{
 bcrypt.genSalt(salt).then((saltValue)=>{
        bcrypt.hash(password,saltValue).then((hash)=>{
            resolve(hash)
        })
     })
 })
 

}

module.exports={validUser,hashPass}