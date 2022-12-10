import React from 'react'
import { useState, useEffect } from "react";

// Import components
import Topbar from "../scenes/constant/Topbar";
import Sidebar from "../scenes/constant/Sidebar";
import Dashboard from "../scenes/dashboard";
import MyProjects from "../scenes/myprojects";
import MyDevelopers from "../scenes/mydevelopers";
import CreateProjectForm from "../scenes/create-project-form";


// Styling
import '../styles/ProjectManager.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

function ProjectManager( {currentUser}) {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [view, setView] = useState("")
  const [displayedItems, setDisplayedItems] = useState(<Dashboard />)

  // This receives information from the Sidebar on what sidebar item has been clicked and stores it in state
  function handleSidebarClick(e) {
    let clickedItem = e.target.textContent
    setView(clickedItem)
  }

  // Conditional rendering based on what sidebar component has been clicked
  useEffect(()=>{
    if (view === "Dashboard") { setDisplayedItems( <Dashboard /> ) }
    else if (view === "My Projects") { setDisplayedItems( <MyProjects position='project_managers' /> ) }
    else if (view === "My Developers") { setDisplayedItems( <MyDevelopers developers={currentUser.developers} /> ) }
    else if (view === "Create New Project") { setDisplayedItems( <CreateProjectForm currentUser= {currentUser}/>) }
  }, [view, currentUser])


  


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
           <Sidebar currentUser={currentUser} isSidebar={isSidebar} handleSidebarClick= {handleSidebarClick} />
          <main className="content">
            <Topbar position='project_manager' setIsSidebar={setIsSidebar}/> 
            { displayedItems }
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ProjectManager;