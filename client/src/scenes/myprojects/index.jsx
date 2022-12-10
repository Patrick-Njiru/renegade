import React, {useEffect, useState} from 'react'
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';

import { tokens } from "../../theme";
import Header from "../../common/Header";

const MyProjects = ( { position }) => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([])

  const handleUpdate = (data) => {
    
    fetch('/projects/'+data.id , {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(r => {
      if (r.ok) {
        // alert("Updated successfully")
        // fetch(`/${position}/me`).then(res => res.json())
        // .then(user => setProjects(user.projects))        
      } else {
        alert('errors')
        r.json().then(err => setErrors(err.errors))
        alert(errors)
      }
    })
  }

  const handleDelete = (id) => {
    fetch('/projects/'+id, {
      method: 'DELETE',
      head: 'no-content'
    }).then(res => console.log(res.json()))
  }

  const renderUpdateButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(e) => {
                    handleUpdate(params.row)
                }}
            >
              Update
            </Button>
        </strong>
    )
}

const renderDeleteButton = (params) => {
  return (
      <strong>
          <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={(e) => {
                  handleDelete(params.row.id)
              }}
          >
            Delete
          </Button>
      </strong>
  )
}

  useEffect(() => {
    fetch(`/${position}/me`).then(res => res.json())
    .then(user => setProjects(user.projects))
  }, [projects, position])

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let columns = []

  position === 'developers' ? 
  columns = [
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
      editable: true
    },
    {
      field: "developer",
      headerName: "Developer",
      flex: 1,
    },
    {
        field: 'update',
        headerName: 'Update',
        width: 150,
        renderCell: renderUpdateButton,
        disableClickEventBubbling: true,
    }
   
  ] :
  
  columns = [
    { field: "id", headerName: "Project" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true
    },
    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
      editable: true
    },
    {
      field: "progress",
      headerName: "Progress",
      flex: 1,
      editable: true
    },
    {
      field: "developer",
      headerName: "Developer",
      flex: 1,
      editable: true
    },
    {
        field: 'update',
        headerName: 'Update',
        width: 150,
        renderCell: renderUpdateButton,
        disableClickEventBubbling: true,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: renderDeleteButton,
      disableClickEventBubbling: true,
  }
  ]

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
        <DataGrid rows={projects} columns={columns} />
      </Box>
    </Box>
  );
};

export default MyProjects;
