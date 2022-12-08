import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../Styles/Home.css'


const Home = () => {
  return (
    <div id='homepage'>
      <h2 className= 'text'>
        Please select your position in the organization: <br />
      </h2>
      <NavLink
      className="nav-item"
      to='/login/developer'>I am a Developer</NavLink> <br />
      <NavLink 
      className="nav-item"
      to='/login/project_manager'>I am a Project Manager</NavLink>
    </div>
  )
}

export default Home