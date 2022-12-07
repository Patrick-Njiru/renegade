import React from "react";
import { useState } from "react";

function SignupForm( { getUserProps }) {
  const [formData, setFormData] = useState({ username:"", email:"", profile_pic:"", password:"" })

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

    setFormData({ username:"", email:"", profile_pic:"", password:"" })

  }

  return (
    <>
    <div className="home-container">
    
        <div className="main">
        <div className="create-project-form-container">
        <h2>RENEGADE</h2>
        <img src=""></img>
        <p>Welcome developer, Sign up Here.</p>

          <form className="create-project-form" onSubmit={handleSubmit}>
            <input type="text" className="form-field" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Profile_pic" name="profile_pic" value={formData.profile_pic} onChange={handleChange} />
            <input type="text" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            {/* <input type="text" className="form-field" placeholder="Confirm_passowrd" name="confirm_password" value={formData.confirm_password} onChange={handleChange} /> */}


            <input type="text" className="form-field" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          
            <button className="form-field"> Signup </button>
    
          </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default SignupForm;
