import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupForm.css"

function SignupForm( { getUserProps, setUser }) {
  const [errors, setErrors] = useState(null)
  const [formData, setFormData] = useState({ username:"", email:"", profile_pic:"", password:"", password_confirmation:"" })

  const navigate = useNavigate()

  function handleChange(e){ setFormData({ ...formData, [e.target.name]: e.target.value }) }

  function handleSubmit(e) {

    e.preventDefault();

    fetch("/signup/developer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(r => {
      if (r.ok) {
        r.json()
        .then(user => {
          localStorage.clear()
          localStorage.setItem(`developer`, JSON.stringify(user))
          console.log("Here is our user", user)
        })
        navigate('/developer')
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
    

    setFormData({ username:"", email:"", profile_pic:"", password:"", password_confirmation: "" })
  }

  return (
    <div className="form form-container">
      <div className="main">
        <div className="create-project-form-container">
          <h2 className="title">RENEGADE</h2>
          <p className="p">Welcome developer, Sign up Here.</p>
          <form className="create-project-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Profile_pic_url" name="profile_pic" value={formData.profile_pic} onChange={handleChange} />
            <input type="password" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <input type="password" className="form-field" placeholder="Confirm Passowrd" name="password_confirmation" 
              value={formData.confirm_password} onChange={handleChange} />
            <button className="form-field"> Signup </button>
            { errors ? errors.map(error => (<h3 style={{color: 'red', fontStyle: 'italic'}} key={error}>{error}</h3>)) : null }
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignupForm;