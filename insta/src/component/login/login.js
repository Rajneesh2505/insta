import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const LogIn=()=>{

    const [user,setUser]=useState({username:"",password:""})
    const handleName=(e)=>{
        setUser({...user,username:e.target.value})
    }
    const handlePass=(e)=>{
        setUser({...user,password:e.target.value})
    }
    const navigate=useNavigate()
    const handleSubmit=async()=>{
    if(!user.username || !user.password){
      navigate("/")
    }else{
        axios({
        url:"http://localhost:3000/user/login",
        method:"POST",
        headers:{},
        data:user
    }).then((user)=>{
    localStorage.setItem("Token",user.data.authToken)
    localStorage.Token==="undefined" ? navigate("/") :navigate("/post")
    }).catch((err)=>{
        console.log(err)
    })
    // if(await localStorage.length){
    //     navigate("/post")
    // }else{
    //     navigate("/")
    // }
    
    }
    }
return (
    <>
    <form>
        <div>
            <input type="text" id="username" onChange={handleName} placeholder="Enter Username"/>
        </div>
        <div>
            <input type="password" id="password" onChange={handlePass} placeholder="Enter Password"/>
        </div>
        <button type="button" onClick={handleSubmit}>Log In</button>
    </form>
    </>
)
}
export default LogIn