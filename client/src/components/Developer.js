import React from 'react'
import MyProjects from './MyProjects'
import NavBar from './NavBar'

function Developer( { developer }) {
  return (
    <>
    <div>Developer</div>
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <NavBar />
      <MyProjects developer = {developer} />
    </div>
    </>

  )
}

export default Developer