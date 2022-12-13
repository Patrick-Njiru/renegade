import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, IconButton, useTheme } from "@mui/material";
import {  tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { Typography } from "@mui/material";


const Topbar = ( {position} ) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate()

  function handleClick(e) {
    fetch(`/logout/${position}`, {
      method: "DELETE",
      head: "no-content"
    })
    .then(console.log("Here is our user", {})
    )
    .then( localStorage.clear()).then(navigate('/'))
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search projects" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleClick}>
        <Typography variant="h5" color={colors.grey[100]} sx={{ m: "0px 20px 0 0" }} >Logout</Typography>
        <ExitToAppOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
