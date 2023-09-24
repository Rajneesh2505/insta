import Logo from "../assets/logo.jpg"
import Camera from "../assets/camera.jpg"
import "../css/header.css"
import { Link,useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate=useNavigate()
    const handleLogOut=()=>{
        localStorage.clear()
        navigate("/")
    }
return (
    <>
    <div className="header">
    <div>
        <img src={Logo} className="logo"/><span className="Insta">Instaclone</span>
    </div>
    <div>
        <Link to="/newpost"><img src={Camera} className="camera"/></Link>
    </div>
    <button onClick={handleLogOut}>Log Out</button>
    </div>
    <hr></hr>
    </>
)
}
export default Header