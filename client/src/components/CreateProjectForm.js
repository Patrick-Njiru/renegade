import React from "react";
import { useState } from "react";

function CreateProjectForm() {
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    deadline:"",
    progress:"",
    developer:""
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // When form is submitted, create a new project with the 
  // details in the formData. 
  function handleSubmit(e) {
    e.preventDefault();
    // fetch("OUR BACKEND RAILS API => /projects")
    // .then((response) => response.json())
    // .then((data) => setUser(data))
    setFormData({
      title:"",
      description:"",
      deadline:"",
      progress:"",
      developer:""
    })
  }

  return (
    <div className="main">
    <div className="create-project-form-container">
      <form className="create-project-form" onSubmit={handleSubmit}>
        <input className="form-field" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
        <input className="form-field" placeholder="Descritpion" name="description" value={formData.description} onChange={handleChange} />
        <input className="form-field" placeholder="Deadline" name="deadline" value={formData.deadline} onChange={handleChange} />
        <input className="form-field" placeholder="Progress" name="progress" value={formData.progress} onChange={handleChange} />
        <input className="form-field" placeholder="Developer" name="developer" value={formData.developer} onChange={handleChange} />
        <button className="form-field">Create New Project</button>
      </form>
    </div>
    </div>
  )
}

export default CreateProjectForm;