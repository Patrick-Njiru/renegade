<<<<<<< HEAD:client/src/components/SignupForm.js
import React from "react";
import { useState } from "react";
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css"
>>>>>>> acaec33ead22a4dede603cf62282f21df89a371b:client/src/SignupForm.js

function SignupForm( { getUserProps }) {
  const [formData, setFormData] = useState({ username:"", email:"", profile_pic:"", password:"", password_confirmation:"" })

  function handleChange(e){ setFormData({ ...formData, [e.target.name]: e.target.value }) }

  function handleSubmit(e) {

    e.preventDefault();

    fetch("/signup/developer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(console.log)

    setFormData({ username:"", email:"", profile_pic:"", password:"", password_confirmation: "" })
  }

  return (
    <div className="form form-container">
      <div className="main">
        <div className="create-project-form-container">
          <h2 className="title">RENEGADE</h2>
          {/* <img src=""></img> */}
          <p className="p">Welcome developer, Sign up Here.</p>
          <form className="create-project-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Profile_pic" name="profile_pic" value={formData.profile_pic} onChange={handleChange} />
            <input type="password" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <input type="password" className="form-field" placeholder="Confirm Passowrd" name="password_confirmation" 
              value={formData.confirm_password} onChange={handleChange} />
            <button className="form-field"> Signup </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignupForm;