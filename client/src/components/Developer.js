import React from 'react'
import MyProjects from './MyProjects'
import NavBar from './NavBar'

function Developer( { userProps }) {
  return (
    <>
    <div>Developer</div>
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <NavBar />
      <MyProjects userProps = {userProps} />
    </div>
    </>

  )
}

export default Developer