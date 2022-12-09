import React from 'react'
import MyProjects from './MyProjects'
import CreateProjectForm from './CreateProjectForm'

function ProjectManager( {projectManager} ) {

  return (
    <>
      <div>Manager</div>
      <MyProjects />
      <CreateProjectForm />
    </>
  )
}

export default ProjectManager