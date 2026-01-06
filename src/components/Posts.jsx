import { useContext } from "react"
import { PostsContext } from "../contexts/PostsContext"
import { Link } from "react-router-dom"
export default function Posts() {
    const posts = useContext(PostsContext)
  return (
    <div>
        {posts.map((post)=>{
            return(
                <Link key={post.id} to={`/postDetails/${post.id}`}>
                    <div style={{width:"400px",margin:"10px auto" ,backgroundColor:"navy" , color:"white",textAlign:"center"}}>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                    </div>
                </Link>
            )
        })}
        
    </div>
  )
}
