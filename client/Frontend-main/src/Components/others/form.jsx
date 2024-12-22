import  { useState } from 'react';
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

export default function OtherForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    userType: 'student',
    collegeName: '',
    course: '',
    enrollmentNumber: '',
    department: '',
    designation: '',
    employeeId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        p: 3,
        backgroundColor: 'white',
        borderRadius: 2,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Registration Form
        </Typography>

        <Grid container spacing={2}>
          {/* Common Fields */}
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* User Type Radio Buttons */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              User Type:
            </Typography>
            <RadioGroup
              row
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="student"
                control={<Radio color="primary" />}
                label="Student"
              />
              <FormControlLabel
                value="teacher"
                control={<Radio color="primary" />}
                label="Teacher"
              />
            </RadioGroup>
          </Grid>

          {/* Conditional Fields */}
          {formData.userType === 'student' && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="College Name"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enrollment Number"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </>
          )}

          {formData.userType === 'teacher' && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Employee ID"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </>
          )}
        </Grid>

        {/* Submit Button */}
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
