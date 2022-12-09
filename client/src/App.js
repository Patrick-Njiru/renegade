import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import Home from './components/Home';
import Manager from './components/Manager';
import Developer from './components/Developer';
import SignupForm from './components/SignupForm';
import ProjectManagerLoginForm from './components/ProjectManagerLoginForm';
import DeveloperLoginForm from './components/DeveloperLoginForm.js';
// import NavBar from './components/NavBar'
=======
import Home from './Home';
import DeveloperLoginForm from './DeveloperLoginForm.js';
import ProjectManagerLoginForm from './ProjectManagerLoginForm';
import SignupForm from './SignupForm'
import ProjectManager from './ProjectManager'
import Developer from "./Developer"

>>>>>>> acaec33ead22a4dede603cf62282f21df89a371b

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
<<<<<<< HEAD
          <Route path="/developer" element={<Developer />} />
          <Route path="/project_manager" element={<Manager />} />
          <Route path="/signup/developer" element={<SignupForm />} />
          <Route path="/login/developer" element={<DeveloperLoginForm />} />
          <Route path="/login/project_manager" element={<ProjectManagerLoginForm />} />
        </Routes>
=======
           <Route path="/developer" element={<Developer developer={developer} />} />
           <Route path="/project_manager" element={<ProjectManager projectManager={projectManager} />} />
           <Route path="/signup/developer" element={<SignupForm setDeveloper={setDeveloper} />} /> 
           <Route path="/login/developer" element={<DeveloperLoginForm user={developer} setDeveloper={setDeveloper} />} />
           <Route path="/login/project_manager" element={<ProjectManagerLoginForm user={developer} setProjectManager={setProjectManager} />} />
         </Routes>
>>>>>>> acaec33ead22a4dede603cf62282f21df89a371b
      </Router>
    </>
  );
}

export default App;
