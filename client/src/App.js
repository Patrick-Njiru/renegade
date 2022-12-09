import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Home from './Home';
import DeveloperLoginForm from './DeveloperLoginForm.js';
import ProjectManagerLoginForm from './ProjectManagerLoginForm';
import SignupForm from './SignupForm'
import ProjectManager from './ProjectManager'
import Developer from "./Developer"


function App() {
  return (
    <>

      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home home={home} />} />
           <Route path="/developer" element={<Developer developer={developer} />} />
           <Route path="/project_manager" element={<ProjectManager projectManager={projectManager} />} />
           <Route path="/signup/developer" element={<SignupForm setDeveloper={setDeveloper} />} /> 
           <Route path="/login/developer" element={<DeveloperLoginForm user={developer} setDeveloper={setDeveloper} />} />
           <Route path="/login/project_manager" element={<ProjectManagerLoginForm user={developer} setProjectManager={setProjectManager} />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
