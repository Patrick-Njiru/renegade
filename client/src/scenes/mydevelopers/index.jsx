import React, {useState, useEffect } from 'react'
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../common/Header";
import { useTheme } from "@mui/material";

const MyDevelopers = () => {
  const [developers, setDevelopers] = useState([])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  useEffect(() => {
    fetch(`/project_managers/me`).then(res => res.json())
    .then(user => setDevelopers(user.developers))
  }, [developers])

  const columns = [
    { 
      field: "id", 
      headerName: "ID" 
    },
    {
      field: "username",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="MY DEVELOPERS"
        subtitle="List of Contacts Information for future reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={developers} columns={columns} />
      </Box>
    </Box>
  );
};

export default MyDevelopers;
