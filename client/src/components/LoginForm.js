import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'


function LoginForm() {
  const [formData, setFormData] = useState({
    username:"",
    password:"",
   
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
    console.log(formData)
    
    // fetch("OUR BACKEND RAILS API => /projects")
    // .then((response) => response.json())
    // .then((data) => setUser(data))
    setFormData({
      username:"",
      password:"",
    })
  }

  return (
    <div className="main">
    <div className="create-project-form-container">
      <form className="create-project-form" onSubmit={handleSubmit}>
        <input className="form-field" placeholder="Username" name="username" value={formData.title} onChange={handleChange} />
        <input className="form-field" placeholder="Password" name="password" value={formData.description} onChange={handleChange} />
       
        <button className="form-field"> Login as Developer </button>
        <button className="form-field"> Signup as Developer </button>
        <button className="form-field"> Login as Manager </button>


      </form>
    </div>
    </div>
  )
}

export default LoginForm;