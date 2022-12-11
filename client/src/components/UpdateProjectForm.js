import React, {useState, useEffect} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../common/Header'


function UpdateProjectForm( {position}) {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const [errors, setErrors] = useState([])
  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    fetch('/developers').then(r => r.json()).then(setDevelopers)
  }, [])

  const data = JSON.parse(localStorage.getItem(`data`))
  const myDetails = JSON.parse(localStorage.getItem(`project_manager`))
  const initialValues = {
      title: data.title,
      description: '',
      deadline: data.deadline,
      developer_id: data.developer_id
    } 
  // let initialValues = {}

  // position === "project_managers" ? myDetails = JSON.parse(localStorage.getItem(`project_manager`)) :
  // myDetails = JSON.parse(localStorage.getItem(`developer`))

  // position === 'project_managers' ? initialValues = {
  //   title: data.title,
  //   description: '',
  //   deadline: data.deadline,
  //   developer_id: data.developer_id
  // } 
  // : initialValues = {progress: data.progress }

  // const myId = (position === 'project_managers') ? (project_manager_id: me.id) : ( developer_id: me.id) 
  
  const handleFormSubmit = (values) => {
    // console.log(data)
    fetch('/projects/'+ data.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...values, project_manager_id: myDetails.id})
    })
    .then(r => r.ok ? alert("Project Updated Successfully") : r.json().then(err => alert(err.errors)))
}

  return (
    <Box m="20px">
      <Header title="UPDATE PROJECT" subtitle="Update the Project" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, borderRadius: "10px"
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title ? values.title : data.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Deadline"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.deadline ? values.deadline : data.deadline}
                name="deadline"
                error={!!touched.deadline && !!errors.deadline}
                helperText={touched.deadline && errors.deadline}
                sx={{ gridColumn: "span 4" }}
              />
              <Field
                fullWidth
                variant="filled"
                as = 'select'
                label="Developer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.developer_id ? values.developer_id : data.developer_id}
                name='developer_id'

                sx={{ gridColumn: "span 4" }}
              >id
                {developers.map(dev => (<option  key={dev.id} value={`${dev.id}`}>{dev.username}</option>))}
              </Field>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Update Project
              </Button>
            </Box>
            {/* { errors ? errors.map(error => (<h3 style={{color: 'red', fontStyle: 'italic'}} key={error}>{error}</h3>)) : null } */}
          </form>
        )}
      </Formik>
    </Box>
      )
}

export default UpdateProjectForm