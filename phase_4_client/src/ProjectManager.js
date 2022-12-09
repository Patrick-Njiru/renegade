import React from 'react'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import Topbar from "./scenes/constant/Topbar";
import Sidebar from "./scenes/constant/Sidebar";
import Dashboard from "./scenes/dashboard";
import MyProjects from "./scenes/myprojects";
import MyDevelopers from "./scenes/mydevelopers";
import CreateProjectForm from "./scenes/create-project-form";
import './ProjectManager.css'

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function ProjectManager() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
           <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/> 
            <Dashboard />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/project_manager_projects" element={<MyProjects />} /> 
              <Route path="/project_manager/mydevelopers" element={<MyDevelopers />} /> 
              <Route path="/project_manager/create-project-form" element={<CreateProjectForm />} />  */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ProjectManager;
