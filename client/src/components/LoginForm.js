import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function LoginForm( { getUserProps }) {
  const [formData, setFormData] = useState({ username:"", password:"" })

  function handleChange(e){ setFormData({ ...formData, [e.target.name]: e.target.value }) }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/login/developer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(getUserProps)

    setFormData({ username:"", password:"" })
  }


  return (
    <>
    <div className="home-container">
    
      
        <div className="main">
        <div className="create-project-form-container">
        <h2>RENEGADE</h2>
        <img src=""></img>
        <p>A project management tool to help keep your company's projects organized</p>

          <form className="create-project-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          
            <button className="form-field"> Login as Developer </button>
            <button className="form-field"> <Link to = "/signup-form"> Signup as Developer </Link></button>
            <button className="form-field"> Login as Manager </button>


          </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default LoginForm;
