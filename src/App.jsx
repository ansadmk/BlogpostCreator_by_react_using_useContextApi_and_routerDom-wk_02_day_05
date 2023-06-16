import { Route,Routes } from "react-router-dom"
import CreateBlog from './pages/CreateBlog'
import Bloglist from './pages/Bloglist'
import BlogDetails from './pages/BlogDetails'
import { Context } from "./pages/Context"
import { useState } from "react"


export const App=()=> {
  const [state,setstate]=useState([])

  const data={
    state,setstate
  }
  
  return (
    <>
    <Context.Provider value={data}>
      <Routes>
        <Route path="/" element={<Bloglist/>}/>
        <Route path="/createblog" element={<CreateBlog/>}/>
        <Route path="/blogs" element={<Bloglist/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>}/>
      </Routes>
      </Context.Provider>
    </>
  )
}
