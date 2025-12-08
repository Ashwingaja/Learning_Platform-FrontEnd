import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Post from './post.jsx'
import Navbar from './navbar.jsx'
import NavBarCourse from './navBarCourse.jsx'
import About from './about.jsx'
const router = createBrowserRouter([
  {
    path :"/",
    element :  <Navbar/>
  },
  {
  path : "/login/",
  element :<App/>
  },
  {
    path :"/Course",
    element : <NavBarCourse/>
  },
  {
    path :"/Post/:id",
    element : <Post/>
  },
  {
    path :"/About",
    element : <About/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
