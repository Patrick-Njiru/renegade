<<<<<<< HEAD:client/src/components/LoginForm.js
import React from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom'
=======
import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "./index.css"
import "./LoginForm.css"
>>>>>>> acaec33ead22a4dede603cf62282f21df89a371b:client/src/LoginForm.js

function LoginForm( {position} ) {
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

    fetch(`/login/${position}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(console.log)

    setFormData({
      username:"",
      password:"",
    })
  }

  const buttons = (position === 'developer') ? (
    <>
      <button className="form-field" > Login </button>
<<<<<<< HEAD:client/src/components/LoginForm.js
      <button className="form-field" > 
        <NavLink className="form-field" to="/signup/developer"> 
=======
        <p className="unique">
          Don't have an account? &emsp;
          <NavLink style={{textDecoration: 'none', color: '#ffff'}} to="/signup/developer"> 
>>>>>>> acaec33ead22a4dede603cf62282f21df89a371b:client/src/LoginForm.js
          Signup 
        </NavLink>
      </button>
    </>
  ) :
  (<button className="form-field" > Login </button>)

  return (
    
    <div className="form form-container">
      <div className="main">
        <div className="create-project-form-container">
          <h2 className="title">RENEGADE</h2>
          {/* <img src="" alt="image" /> */}
          <p className="p">A project management tool to help keep your company's projects organized</p>
          <form className="create-project-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            { buttons }
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
