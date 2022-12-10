import React from "react";
import LoginForm from "./LoginForm";


function DeveloperLoginForm( {setProjectManager} ) {
  return (<LoginForm position="project_manager" setUser={setProjectManager} />)
}

export default DeveloperLoginForm;
