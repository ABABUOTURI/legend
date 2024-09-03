import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Hardcoded user credentials
const hardcodedUser = {
    name: 'Emmanuel Ababu',
    password: '@254',
};

// Route to handle login
app.post('/login', (req, res) => {
    const { name, password } = req.body;

    if (name === hardcodedUser.name && password === hardcodedUser.password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
