import { useEffect, useState } from "react"
import axios from "axios"
import Insta from "../assets/landing.png"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Signup=()=>{
    let navigate=useNavigate()
    const attribute=[{label:"Username :",id:"username",type:"text"},
                     {label:"PhoneNumber :",id:"phoneNumber",type:"text"},
                     {label:"Password :",id:"password",type:"password"},]

    const [userData,setUserData]=useState({username:"",phoneNumber:"",password:""})

    const handledata=(e,id)=>{
         setUserData({...userData,[id]:e.target.value})
    }
    const handleClick=()=>{
            if(!userData.username || !userData.phoneNumber || !userData.password){
                alert("Fill All Ahe Blank Spaces")
                navigate("/signup")
            }else{
                axios({
                    url:"http://localhost:3000/user/signup",
                    method:"POST",
                    headers:{},
                    data:userData
                }).then(()=>{

                }).catch((err)=>{
                    alert(err.message)
                })
               navigate("/")
            }
}

    return (
        <>
        <div className="entry">
   <div>
   <img src={Insta} className="insta"/>
   </div>
   <div className="container">
   <div className="text">Inatsgram</div>
     <div className="btn">
     {attribute.map((value)=>{
            return (
                <>
                <form>
                    <div>
                        <input type={value.type} id={value.id} onChange={(e)=> (handledata(e,value.id))} placeholder={`enter ${value.id}`}/>
                    </div>
                </form>
                </>
            )
        })}
        <button type="button" onClick={handleClick}>SignUp</button>
     </div>
   </div>
   </div>
        </>
    )
}
export default Signup