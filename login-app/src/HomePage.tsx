import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage: React.FC = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const age = params.get('age');

    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #008080, #87CEEB, #D3D3D3)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        mt: 8,
                        textAlign: 'center',
                        p: 4,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontFamily: '"Comic Sans MS", cursive, sans-serif', // Unique font style
                        }}
                    >
                        Welcome, {name}!
                    </Typography>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            backgroundColor: '#87CEEB',
                            borderRadius: '10px',
                            display: 'inline-block',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Your age is: {age}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
