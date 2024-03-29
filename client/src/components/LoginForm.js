import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "../styles/index.css"
import "../styles/LoginForm.css"

function LoginForm( {position} ) {

  const [errors, setErrors] = useState(null)
  const [formData, setFormData] = useState({
    username:"",
    password:"",
  })
  const navigate = useNavigate()

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/login/${position}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json()
        .then(user => {
          if (position === 'developer') {
            localStorage.clear()
            localStorage.setItem(`developer`, JSON.stringify(user))
            console.log("Here is our user", user);
          } else {
            localStorage.clear()
            localStorage.setItem(`project_manager`, JSON.stringify(user))
            console.log("Here is our user", user);
          }
          navigate(`/${position}`)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })

    setFormData({
      username:"",
      password:"",
    })
  }

  const buttons = (position === 'developer') ? (
    <>
      <button className="form-field" > Login </button>
        <p className="unique">
          Don't have an account? &emsp;
          <NavLink style={{textDecoration: 'none', color: '#ffff'}} to="/signup/developer"> 
            Signup 
          </NavLink>
        </p>
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
            <input type="password" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            { buttons } <br />
            { errors ? errors.map(error => (<h3 style={{color: 'red', fontStyle: 'italic'}} key={error}>{error}</h3>)) : null }
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
