const express = require('express');
const app = express();
const connectDb = require('./Services/ConnectDbService');

const port = 5000;

// connect database
connectDb();

// router for app
app.get('/', (req, res) => {
    res.send('Hello World Nodejs');
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