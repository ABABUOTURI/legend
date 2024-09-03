import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const LoginPage: React.FC = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const calculateAge = (dob: string) => {
        const birthDate = new Date(dob);
        const difference = Date.now() - birthDate.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const handleSubmit = async () => {
        const age = calculateAge(dob);

        if (age < 18 || age > 50) {
            setError('Age must be between 18 and 50.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
                name,
                password,
            });

            if (response.data.success) {
                window.location.href = `/home?name=${name}&age=${age}`;
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Server error');
        }
    };

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
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Date of Birth"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{
                            mt: 2,
                            borderRadius: '25px',
                            width: '50%',
                            alignSelf: 'center',
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;
