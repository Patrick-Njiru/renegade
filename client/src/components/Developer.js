import React, { useState, useEffect } from "react";

// Import components
import Topbar from "../scenes/constant/Topbar";
import DeveloperSidebar from "../scenes/constant/DeveloperSidebar";
import MyProjects from "../scenes/myprojects";
import MyManagers from './MyManagers';

// Styling
import '../styles/Developer.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

function Developer( {currentUser}) {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [view, setView] = useState("")
  const [displayedItems, setDisplayedItems] = useState(<MyProjects position='developers' />)



  // This receives information from the Sidebar on what sidebar item has been clicked and stores it in state
  function handleDeveloperSidebarClick(e) {
    let clickedItem = e.target.textContent
    setView(clickedItem)
  }

  function handleUpdate(project) {
    console.log(project)
  }

  
  // When page loads first time, change the state "view", so that the page renders
  useEffect(()=>{setView("My Projects")}, [])

 // Conditional rendering based on what sidebar component has been clicked
  useEffect(()=>{
    if (view === "My Projects") { setDisplayedItems( <MyProjects position='developers' handleUpdate={handleUpdate}/> ) }
    else if (view === "My Managers") { setDisplayedItems( <MyManagers managers = {currentUser.project_managers} /> ) }
   
  }, [view, currentUser])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
           <DeveloperSidebar currentUser={currentUser} isSidebar={isSidebar} handleDeveloperSidebarClick={ handleDeveloperSidebarClick }/>
          <main className="content">
            <Topbar position='developer' setIsSidebar={setIsSidebar}/> 
            { displayedItems }
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Developer;
