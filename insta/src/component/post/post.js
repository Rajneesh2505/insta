import { useEffect, useState } from "react"
import Like from "../assets/like.jpg"
import Unlike from "../assets/unlike.jpg"
import Header from "../header/header"
import "../css/post.css"

const Post=()=>{
let [post,setPost]=useState([])
const [flag,setFlag]=useState(false)
const [counter,setCounter]=useState(0)
const newPosts=[]
  useEffect(()=>{
    fetch("http://localhost:3000/post/posts").then((res)=>{
        return res.json()
    }).then((res)=>{
         setPost([...res])
    })
  },[])
const handleFlag=()=>{
    setFlag(!flag)
    if(!flag){
        setCounter(counter+1)
    }
}

for(let i=post.length-1;i>=0;i--){
    newPosts.push(post[i])
}

    return (
        <>
        <Header/>
        {newPosts.map((post)=>{
            return (
                <>
                <div className="post-container">
                     <div class="post-head">
                        <div>
                            <h4>{post.name}</h4>
                        </div>
                        <div>
                            {post.location}
                        </div>
                     </div>
                     <div className="post-img">
                        <img src={post.PostImage} height={"280em"} width={"422.2em"} alt={"post Image"}/>
                     </div>
                     <div className="post-date">
                        <div><img src={flag?Like:Unlike} onClick={handleFlag} height={"60em"} style={{margin:"-1em 0.4em"}}/></div>
                        <div>{post.date.slice(4,16)}</div>
                     </div>
                     <div style={{margin:"-.6em 1.9em"}}>{counter}</div>
                     <div className="post-description">
                        <b>{post.description}</b>
                     </div>
                </div>
                </>
            )
         })} 
        </>
    )

}
export default Post