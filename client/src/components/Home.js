import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../Styles/Home.css'


const Home = () => {
  return (
    <div class="wrapper">
    <div id='homepage'>
      <h2 className= 'text'>
        Welcome to Renegade. <br /> Are you a developer or project manager ? Please select one to continue <br />
      </h2>

      <div className ="Homelink"> 
      <NavLink
      className="container one"
      to='/login/developer'>Developer</NavLink> <br/>
      <NavLink 
      className="container two"
      to='/login/project_manager'>Project Manager</NavLink>
      </div>
    </div>
    </div>
  )
}

export default Home