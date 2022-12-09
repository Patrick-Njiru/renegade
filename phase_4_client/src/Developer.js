import React from 'react'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import Topbar from "./scenes/constant/Topbar";
import DeveloperSidebar from "./scenes/constant/DeveloperSidebar";
import Dashboard from "./scenes/dashboard";
import MyProjects from "./scenes/myprojects";
import MyDevelopers from "./scenes/mydevelopers";
import CreateProjectForm from "./scenes/create-project-form";
import './ProjectManager.css'

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function Developer() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
           <DeveloperSidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/> 
            <Dashboard />
            {/* <Routes>
            <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/developer_projects" element={<MyProjects />} /> 
            <Route path="/developer/mydevelopers" element={<MyDevelopers />} /> 
            <Route path="/developer/create-project-form" element={<CreateProjectForm />} />  */}
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Developer;
