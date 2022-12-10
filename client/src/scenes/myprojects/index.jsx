import React, {useEffect, useState} from 'react'
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../common/Header";

const MyProjects = ( { position }) => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`/${position}/me`).then(res => res.json())
    .then(user => setProjects(user.projects))
    .then(console.log(projects))

  }, [projects, position])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Project" },
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
      <Header title="MY PROJECTS" subtitle="Managing my projects" />
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
        {/* DataGrid receives an array of javascript objects that looks like this:
        [
          {
            id: 1,
            title: "Jon Snow",
            description: "jonsnow@gmail.com",
            deadline: 35,
            progress: "(665)121-5454",
            developer: "admin",
          },
        ]
        */}
        <DataGrid checkboxSelection rows={projects} columns={columns} />
      </Box>
    </Box>
  );
};

export default MyProjects;
