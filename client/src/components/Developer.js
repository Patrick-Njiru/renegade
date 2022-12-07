import React from 'react'
import MyProjects from './MyProjects'

function Developer( { userProps }) {
  return (
    <>
      <div>Developer</div>
      <MyProjects userProps = {userProps} />
    </>

  )
}

export default Developer