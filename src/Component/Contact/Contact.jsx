import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission status
  const [successMessage, setSuccessMessage] = useState(''); // State to store success message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set submitting state to true to show loading/spinner if needed
    setSubmitting(true);

    // Sending email using email.js
    emailjs.sendForm('service_m790474', 'template_l1u1nce', e.target, 'pC3eCQsBjvhDuQ4in')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Thanks for contacting us!'); // Set success message upon successful submission
      })
      .catch((error) => {
        console.log(error.text);
        // Optionally handle error here, e.g., set error state to show error message
      })
      .finally(() => {
        setSubmitting(false); // Reset submitting state
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Typography variant="h4" component="h1" color="primary" gutterBottom>
            Contact Us
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </Box>
          {successMessage && (
            <Box mt={2}>
              <Typography variant="body1" align="center" color="primary">
                {successMessage}
              </Typography>
            </Box>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
