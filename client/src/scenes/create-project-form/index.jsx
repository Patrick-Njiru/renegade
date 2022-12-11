import React, {useState, useEffect} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../common/Header";

const CreateProjectForm = ({currentUser}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setErrors] = useState([])
  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    fetch('/developers').then(r => r.json()).then(setDevelopers)
  }, [])
    
  

  const handleFormSubmit = (values) => {
    fetch('/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then(r => {
      if (r.ok) {
        r.json().then(project => currentUser.projects << project)
    } else {
      r.json().then(err => setErrors(err.errors))
    }
  })
}
  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().required("required"),
    deadline: yup.string().required("required"),
    progress: yup.string().required("required"),
    developer_id: yup.string().required("required"),
  });

  const initialValues = {
    project_manager_id: currentUser.id,
    title: "",
    description: "",
    deadline: "",
    progress: "",
    developer_id: ""
  };

  return (
    <Box m="20px">
      <Header title="CREATE PROJECT" subtitle="Create a New Project to Manage" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
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
                value={values.title}
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
                value={values.deadline}
                name="deadline"
                error={!!touched.deadline && !!errors.deadline}
                helperText={touched.deadline && errors.deadline}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Progress"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.progress}
                name="progress"
                error={!!touched.progress && !!errors.progress}
                helperText={touched.progress && errors.progress}
                sx={{ gridColumn: "span 4" }}
              />
              <Field
                fullWidth
                variant="filled"
                as = 'select'
                label="Developer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.developer_id}
                name='developer_id'
                // error={!!touched.developer && !!errors.developer}
                // helperText={touched.developer && errors.developer}
                sx={{ gridColumn: "span 4" }}
              >id
                {developers.map(dev => (<option  key={dev.id} value={`${dev.id}`}>{dev.username}</option>))}
              </Field>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Project
              </Button>
            </Box>
            {error.map(error => (<h3 style={{color: 'red', fontStyle: 'italic'}} key={error}>{error}</h3>))}
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateProjectForm;
