import React from 'react'
import MyProjects from './MyProjects'
import NavBar from './NavBar'

function Developer( { userProps }) {
  return (
    <>
      <NavBar />
      <div>Developer</div>
      <MyProjects userProps = {userProps} />
    </>
  )
}

export default Developer;