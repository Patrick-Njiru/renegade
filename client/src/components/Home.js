import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div id='homepage'>
      <h2>
        Please select your position in the organization: <br />
      </h2>
      <NavLink to='/login/developer'>I am a Developer</NavLink> <br />
      <NavLink to='/login/project_manager'>I am a Project Manager</NavLink>
    </div>
  )
}

export default Home