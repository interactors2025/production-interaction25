import { useState } from 'react'
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Typography,
  Box
} from '@mui/material'
import './Form.css'
import CancelButton from './CancelButton'

const Form = () => {






  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    collegeName: '',
    section: '',
    state: '',
    country: '',
    Events: [],
    amount: 0,
    Image: null,
    status: '',
    createdAt: '',
    deleted: '',
    role: '' // Default role is 'student'
  })
  console.log(formData)

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const events1 = [
    { name: 'National Conference', amount: 100 },
    { name: 'Brain Battle (Day1)', amount: 100 },
    { name: 'Media Splash(Day1)', amount: 100 },
    { name: 'Wisdom War(Day1)', amount: 100 },
    { name: 'Hack in the Dark(Day2)', amount: 100 },
    { name: 'Spark the Idea(Day2)', amount: 100 },
    { name: 'Gold Rush Quest(Day2)', amount: 100 }
  ]

  const qrCodes = {
    100: 'path_to_qr_for_100',
    200: 'path_to_qr_for_200',
    300: 'path_to_qr_for_300',
    400: 'path_to_qr_for_400',
    500: 'path_to_qr_for_500',
    600: 'path_to_qr_for_600',
    700: 'path_to_qr_for_700'
  }

  // Handle role change
  const handleRoleChange = event => {
    setFormData({ ...formData, role: event.target.value })
  }

  // Handle input field changes
  const handleChange = field => event => {
    setFormData({ ...formData, [field]: event.target.value })
  }

  // Handle event selection
  const handleEventChange = event => {
    const selectedEvents = formData.Events.includes(event.name)
      ? formData.Events.filter(e => e !== event.name)
      : [...formData.Events, event.name]

    const totalAmount = selectedEvents.reduce(
      (total, eventName) =>
        total + events1.find(e => e.name === eventName).amount,
      0
    )

    setFormData({
      ...formData,
      Events: selectedEvents,
      amount: totalAmount
    })
  }

  // Validate the form
  const validateForm = () => {
    const errors = {}
    if (!formData.firstName) errors.firstName = 'First name is required.'
    if (!formData.lastName) errors.lastName = 'Last name is required.'
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      errors.mobile = 'Valid 10-digit mobile number is required.'

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Valid email address is required.'

    if (!formData.collegeName) errors.collegeName = 'College name is required.'
    if (!formData.state) errors.state = 'State is required.'
    if (!formData.country) errors.country = 'Country is required.'

    if (!formData.section) errors.section = 'Please select your section.'

    if (formData.Events.length === 0)
      errors.events = 'Please select at least one event.'
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    if (!validateForm()) return;
  
    const apiUrl = formData.role === 'staff'
      ? 'http://localhost:6789/api/v1/register-staff'
      : 'http://localhost:6789/api/v1/register';
  
    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('collegeName', formData.collegeName);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('role', formData.role);
  
    if (formData.role === 'student') {
      formDataToSend.append('section', formData.section);
      formDataToSend.append('Events', JSON.stringify(formData.Events));
      formDataToSend.append('amount', formData.amount);
    }
  
    if (formData.Image) {
      formDataToSend.append('Image', formData.Image); // Include the file if present
    }
  
    console.log('Submitting form:', formDataToSend.entries());
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend, // Use FormData
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setSuccess('Form submitted successfully!');
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <FormControl sx={{ marginBottom: 2 }}>
        <CancelButton />
        <Typography variant='h4' mb={1}>
          Registration Form
        </Typography>

        <Typography variant='h6' mb={1}>
          Role:
        </Typography>
        <RadioGroup row value={formData.role} onChange={handleRoleChange}>
          <FormControlLabel
            value='student'
            control={<Radio />}
            label='Student'
          />
          <FormControlLabel value='staff' control={<Radio />} label='Staff' />
        </RadioGroup>

        <TextField
          label='First Name'
          value={formData.firstName}
          onChange={handleChange('firstName')}
          fullWidth
          margin='normal'
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label='Last Name'
          value={formData.lastName}
          onChange={handleChange('lastName')}
          fullWidth
          margin='normal'
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          label='Mobile'
          value={formData.mobile}
          onChange={handleChange('mobile')}
          fullWidth
          margin='normal'
          error={!!errors.mobile}
          helperText={errors.mobile}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label='Email'
          value={formData.email}
          onChange={handleChange('email')}
          fullWidth
          margin='normal'
          error={!!errors.email}
          helperText={errors.email}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          label='College Name'
          value={formData.collegeName}
          onChange={handleChange('collegeName')}
          error={!!errors.collegeName}
          helperText={errors.collegeName}
          sx={{ marginBottom: 2 }}
          margin='normal'
        />
        <TextField
          fullWidth
          label='Country'
          value={formData.country}
          onChange={handleChange('country')}
          error={!!errors.country}
          helperText={errors.country}
          sx={{ marginBottom: 2 }}
          margin='normal'
        />
        <TextField
          fullWidth
          label='State'
          value={formData.state}
          onChange={handleChange('state')}
          error={!!errors.state}
          helperText={errors.state}
          sx={{ marginBottom: 2 }}
          margin='normal'
        />

        {formData.role === 'student' && (
          <>
            <Typography variant='h6' mb={1}>
              Section:
            </Typography>
            <RadioGroup
              row
              value={formData.section}
              onChange={handleChange('section')}
            >
              <FormControlLabel value='UG' control={<Radio />} label='UG' />
              <FormControlLabel value='PG' control={<Radio />} label='PG' />
            </RadioGroup>

            {errors.section && (
              <Typography color='error' variant='body2'>
                {errors.section}
              </Typography>
            )}

            <Typography variant='h6' mb={1}>
              Events:
            </Typography>
            <div className='checkbox-container'>
              {events1.map(event => (
                <FormControlLabel
                  key={event.name}
                  control={
                    <Checkbox
                      checked={formData.Events.includes(event.name)}
                      onChange={() => handleEventChange(event)}
                      error={!!errors.state}
                      helperText={errors.state}
                      sx={{ marginBottom: 2 }}
                      margin='normal'
                    />
                  }
                  label={event.name}
                />
              ))}
            </div>
            <Typography variant='h6' mt={2} mb={2}>
              Total Amount: ₹{formData.amount}
              {formData.amount > 0 && (
                <Box className='qr-code-container'>
                  <img src={qrCodes[formData.amount]} alt='QR Code' />
                </Box>
              )}
            </Typography>
          </>
        )}

        {formData.role === 'staff' && (
          <>
            <Typography variant='h6' mt={2} mb={2}>
              National Conference Amount: ₹200
              <Box className='qr-code-container'>
                <img src={qrCodes[200]} alt='QR Code' />
              </Box>
            </Typography>
          </>
        )}

        <Button variant='contained' component='label' sx={{ marginBottom: 2 }}>
          Upload Screenshot
          <input
            type='file'
            hidden
            onChange={e =>
              setFormData({ ...formData, Image: e.target.files[0] })
            }
          />
        </Button>

        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>

        {success && (
          <Typography variant='h6' color='green' className='success-message'>
            {success}
          </Typography>
        )}
      </FormControl>
    </form>
  )
}

export default Form
