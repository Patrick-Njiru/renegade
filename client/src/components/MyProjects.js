import React from 'react'
import ProjectCard from './ProjectCard'

function MyProjects( ) {
  return (
    <div className="myprojects-main">
        
        <div className="myprojects-container">
          <h2>My Projects</h2>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default MyProjects