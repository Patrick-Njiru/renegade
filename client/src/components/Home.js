import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div id='homepage'>
      <h2>
        Please select your position in the organization: <br />
      </h2>
      <NavLink to='/d-login'>I am a Developer</NavLink> <br />
      <NavLink to='/pm-login'>I am a Project Manager</NavLink>
    </div>
  )
}

export default Home