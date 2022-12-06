import React from "react";
import { useState } from "react";
// import { Link } from 'react-router-dom'


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
    // console.log(formData)
    
    fetch("/login/developer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({formData})
    })
    .then((res) => console.log(res))


    setFormData({
      username:"",
      password:"",
    })

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
            <button className="form-field"> Signup as Developer </button>
            <button className="form-field"> Login as Manager </button>


          </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default LoginForm;
