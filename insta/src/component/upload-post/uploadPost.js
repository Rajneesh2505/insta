import { useState } from "react"
import axios from "axios"
import Header from "../header/header"
import { useNavigate } from "react-router-dom"
const UploadPost=()=>{
    const postForm=[{id:"name",type:"text"},
                   {id:"location",type:"text"},
                   {id:"description",type:"text"},
                   {id:"PostImage",type:"file"}]
    const [postData,setPostData]=useState({name:"",location:"",description:"",PostImage:" "}) 

    const handlePost=async(e,id)=>{
            if(id==="PostImage"){
                 let baseData= await fileToBase64(e.target.files[0])
                 setPostData({...postData,PostImage:baseData})
            
            }
            else(
                setPostData({...postData,[id]:e.target.value})
            )
    }   
    const fileToBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            let render=new FileReader()
            render.readAsDataURL(file)
            render.onload=()=>{
                resolve(render.result)
            }
            render.onerror=(err)=>{
                reject(err)
            }
        })
    }   

    const navigate=useNavigate()
    const handleNewPost=()=>{
       if(!postData.name || !postData.location || !postData.description|| !postData.PostImage){
          navigate("/newpost")
       }
       else{
        axios({
            url:"http://localhost:3000/post/postview",
            method:"POST",
            headers:{},
            data:postData
        }).then(()=>{

        }).catch((err)=>{
            alert(err.message)
        })
        navigate("/post")
       }
    }   
    
return (
    <>
    <Header/>
    <div className="newpost" >
    {postForm.map((data)=>{
        return (
            <>
            <div >
                <form>
                    <input type={data.type} id={data.id} placeholder={`enter ${data.id}`} onChange={(e)=>{handlePost(e,data.id)}}required/>
                </form>
            </div>
            </>
        )
    })}
    <button type="button" onClick={handleNewPost}>Post</button>
    </div>
    
    
    </>
)
}
export default UploadPost