import { useParams } from "react-router-dom"
import { PostsContext } from "../contexts/PostsContext"
import { useContext } from "react"


export default function PostsDetails() {
const posts = useContext(PostsContext)
console.log(useParams())
const {id} = useParams()
console.log(id)
const post = posts.find((p)=>p.id === Number(id))
console.log(post)

  return (
    <div style={{width:"400px",margin:"10px auto" ,backgroundColor:"navy" , color:"white",textAlign:"center"}}>
        <p>{post.title}</p>
        <p>{post.content}</p>
    </div>
  )
}
