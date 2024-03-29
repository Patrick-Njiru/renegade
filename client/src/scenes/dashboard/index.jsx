import React, {useState, useEffect} from 'react'
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../common/Header";

const Dashboard = () => {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    fetch('/projects')
    .then(res => res.json()).then(setProjects)
  },[])

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
    },
    {
      field: "progress",
      headerName: "Progress",
      flex: 1,
    },
    {
      field: "developer",
      headerName: "Developer",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
          <Header title="DASHBOARD" subtitle="Welcome! Here are all the projects within your company." />
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
            }}
          >
            <DataGrid  rows={projects} columns={columns} />
          </Box>
      </Box>
  );
};

export default Dashboard;
