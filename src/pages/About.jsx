import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
                About This Project
            </Typography>

            <Typography variant="body1" paragraph>
                Welcome to our web application! This platform is built with modern technologies to provide a smooth,
                responsive, and user-friendly experience.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Technologies Used
            </Typography>

            <List>
                <ListItem>
                    <ListItemText
                        primary="React.js"
                        secondary="A powerful JavaScript library for building dynamic and fast user interfaces using reusable components."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Material UI (MUI)"
                        secondary="A popular React UI framework that provides a consistent and visually appealing design system with ready-to-use components."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="React Router"
                        secondary="Enables seamless navigation across different pages in the app without reloading the browser."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Redux Toolkit"
                        secondary="Redux Toolkit offers a more intuitive and streamlined approach to Redux, reducing the amount of code you need to write and making it easier to manage state in your applications. It also promotes better coding practices and helps you avoid common Redux pitfalls.  "
                    />
                </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Project Goal
            </Typography>

            <Typography variant="body1">
                The goal of this project is to deliver a clean, modern, and efficient interface that serves its purpose
                while offering great usability. Whether you're here to explore or to use our features, we’ve built this
                with performance and accessibility in mind.
            </Typography>
        </Container>
    );
};

export default About;
