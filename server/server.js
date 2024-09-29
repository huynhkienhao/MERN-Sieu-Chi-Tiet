const port = 5000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/auth/login', (req, res) => {
    res.send('Login');
});

app.get('/api/auth/register', (req, res) => {
    res.send('Register');
});

app.listen(port, () => {
    console.log(`Server is running ${port}`);
});