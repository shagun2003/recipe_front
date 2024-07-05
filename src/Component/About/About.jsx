import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Typography variant="h4" component="h1" color="primary" gutterBottom>
            About Us
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Welcome to <strong>SpiceUp</strong>, your go-to platform for sharing and discovering amazing recipes from around the world! Our mission is to bring together food enthusiasts to exchange their favorite dishes, inspire each other, and explore the vast world of cuisine.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're looking for quick weeknight dinners, decadent desserts, or specific dietary options, RecipeRealm has something for everyone. Our community is passionate about food and eager to share their cooking tips, tricks, and secrets with you.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
          <ul>
            <li>Post your favorite recipes and share them with the community.</li>
            <li>Browse recipes by categories.</li>
            <li>Leave comments to provide feedback and suggestions.</li>
            <li>Save your favorite recipes for easy access later.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          Join us on this culinary journey and make your kitchen a hub of delicious creativity. If you have any questions or feedback, feel free to <Link to="/contact">contact us</Link>. Happy cooking!
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;