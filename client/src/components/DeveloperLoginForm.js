import React from "react";
import LoginForm from "./LoginForm";


function DeveloperLoginForm( { setDeveloper}) {
  return (<LoginForm position= "developer" setUser={setDeveloper} />)
}

export default DeveloperLoginForm;
