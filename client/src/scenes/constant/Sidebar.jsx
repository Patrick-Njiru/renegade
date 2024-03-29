import React from 'react'
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, icon, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem  style={{ color: colors.grey[100] }} icon={icon} onClick={onClick}   >
     <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ( { handleSidebarClick, currentUser } ) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
      >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} fontWeight="semi-bold"> || Renegade || </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  border="3px"
                  src={currentUser.profile_pic ? `${currentUser.profile_pic}`: `https://pbs.twimg.com/media/FPsXAFAVcAIJWf4?format=jpg&name=medium`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Project Lead
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}> 
                  {currentUser.username} 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} >
            {/* Dashboard icon and clickable text */}
            <Item title="Dashboard" icon={<HomeOutlinedIcon />} onClick={(e) => handleSidebarClick(e)}/>

            {/* Data title */}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }} > Data </Typography>

            {/* My projects and my developers icons and clickable text */}
            <Item title="My Projects" icon={<PeopleOutlinedIcon  />} onClick={(e) => handleSidebarClick(e)}/>
            <Item title="My Developers" icon={<ContactsOutlinedIcon />}onClick={(e) => handleSidebarClick(e)} />

            {/* Pages title and create new project clickable text */}
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }} > Pages </Typography>
            <Item title="Create New Project" icon={<AddOutlinedIcon />}  onClick={(e) => handleSidebarClick(e)}/>
          </Box>

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
