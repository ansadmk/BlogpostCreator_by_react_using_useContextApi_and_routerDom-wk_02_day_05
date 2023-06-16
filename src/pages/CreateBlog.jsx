import { useContext, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from "./Context"
import 'bootstrap/dist/css/bootstrap.min.css';






function CreateBlog() {
  const nav=useNavigate()
  const myref=useRef(null)
  const textref=useRef(null)
  const data=useContext(Context)
  const {state,setstate}=data
  const addhandle=()=>{
    if (myref.current.value!='' || textref.current.value!='') {
      const title=myref.current.value
      const text=textref.current.value
      setstate([...state,{id:Math.random(),title:title,text:text}])
      console.log(state);
      nav("/blogs")
    } else {
      alert("You must fill the field")
    }
    
  }
  return (
    <div><h1 className="m-5">Create post</h1> <br /><br />
     <input type="text" ref={myref} placeholder="Title" className="border-5 shadow container w-50" required/><br /><br />
     <textarea cols="30" rows="10" ref={textref} placeholder="Content" className="border-5 shadow w-50" ></textarea><br /><br />
  <button className="m-2 border-0 rounded-3 bg-dark-subtle p-3 shadow" onClick={addhandle}>add</button>
    <Link to='/'><button className="m-2 border-0 rounded-3 bg-dark-subtle p-3 shadow" >Back</button></Link>
    </div>
  )
}

export default CreateBlog