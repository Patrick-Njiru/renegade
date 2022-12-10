import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../styles/Home.css'

const Home = () => {
  return (
    <div class="wrapper">
      <div id='homepage'>
        <h2 className= 'text'> What Is Your Role <br /> in This Organization? </h2>
        <div className ="Homelink"> 
          <NavLink className="container one" to='/login/developer'>Developer</NavLink> <br/>
          <NavLink className="container two" to='/login/project_manager'>Project Manager</NavLink> </div>
      </div>
    </div>
  )
}

export default Home