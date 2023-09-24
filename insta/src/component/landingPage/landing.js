import Insta from "../assets/landing.png"
import "../css/landing.css"
import LogIn from "../login/login"
import { Link } from "react-router-dom"
const Landing=()=>{
return (
    <>
   <div className="entry">
   <div>
   <img src={Insta} className="insta"/>
   </div>
   <div className="container">
   <div className="text">Inatsgram</div>
     <div className="btn">
       <div>
        <LogIn/>
       </div>
       <div>
       <Link to="/signup"><button className="button"><b>SignUp</b></button></Link>
       </div>
     </div>
   </div>
   </div>
    </>
)
}
export default Landing