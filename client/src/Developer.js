import React from 'react'
import { useState, useEffect } from "react";

// Import components
import Topbar from "./scenes/constant/Topbar";
import DeveloperSidebar from "./scenes/constant/DeveloperSidebar";
import MyProjects from "./scenes/myprojects";
import MyManagers from './MyManagers';

// Styling
import './Developer.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { mockProjectsPM, mockDevsPM } from './data/mockData'

function Developer( {currentUser}) {


  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [view, setView] = useState("")
  const [displayedItems, setDisplayedItems] = useState(<MyProjects user_projects={mockProjectsPM}/>)



  // This receives information from the Sidebar on what sidebar item has been clicked and stores it in state
  function handleDeveloperSidebarClick(e) {
    let clickedItem = e.target.textContent
    setView(clickedItem)
  }

 // Conditional rendering based on what sidebar component has been clicked
  useEffect(()=>{
    if (view === "My Projects") { setDisplayedItems( <MyProjects user_projects={mockProjectsPM} /> ) }
    else if (view === "My Managers") { setDisplayedItems( <MyManagers managers = {mockDevsPM} /> ) }
   
  }, [view])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
           <DeveloperSidebar currentUser={currentUser} isSidebar={isSidebar} handleDeveloperSidebarClick={ handleDeveloperSidebarClick }/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/> 
            { displayedItems }
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Developer;
