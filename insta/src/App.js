import Signup from "./component/signup/signup"
import LogIn from "./component/login/login"
import Post from "./component/post/post"
import Landing from "./component/landingPage/landing"
import UploadPost from "./component/upload-post/uploadPost"
import { BrowserRouter,Routes,Route } from "react-router-dom"
const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Landing/>} ></Route>
      <Route  exact path="/signup"  element={<Signup/>}></Route>
      <Route exact path="/newpost" element={<UploadPost/>} ></Route>
      <Route  exact path="/post" element={<Post/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App