import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import DeveloperLoginForm from './DeveloperLoginForm.js';
import ProjectManagerLoginForm from './ProjectManagerLoginForm';
import SignupForm from './SignupForm'
import ProjectManager from './ProjectManager'
import Developer from "./Developer"


function App() {
  const [developer, setDeveloper] = useState([])
  const [projectManager, setProjectManager] = useState([])

  
  useEffect(() => {
    setDeveloper(JSON.parse(localStorage.getItem(`developer`)))
    setProjectManager(JSON.parse(localStorage.getItem(`project_manager`)))
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/developer" element={<Developer currentUser={developer} />} />
          <Route path="/project_manager" element={<ProjectManager currentUser={projectManager} />} />
          <Route path="/signup/developer" element={<SignupForm />} /> 
          <Route path="/login/developer" element={<DeveloperLoginForm />} />
          <Route path="/login/project_manager" element={<ProjectManagerLoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
