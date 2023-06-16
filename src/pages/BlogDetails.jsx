import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { Context } from "./Context"
import 'bootstrap/dist/css/bootstrap.min.css';




function BlogDetails() {
  const data=useContext(Context)
  const {state}=data
  const {id}=useParams()
  const title=state.filter(a=>a.id==id)
  return (
    <div><h1 className="m-5">Details</h1>
      {title.map(a=>(
      <div className="bg-dark-subtle container w-50 rounded-5 shadow p-5">  <h1 key={a.id}>{a.title}<br/> <hr className="w-25 container m-auto" /><br/> <h5 className="container">{a.text}</h5> </h1> </div>
      ))}
      <br />
      <Link to='/blogs'><button className="border-0 rounded-3 bg-dark-subtle p-3 shadow">view posts</button></Link>
    </div>
  )
}

export default BlogDetails