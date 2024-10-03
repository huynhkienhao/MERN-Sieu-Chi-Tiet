const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 5000;

// connect database
mongoose.connect('mongodb://127.0.0.1:27017/mern_auth')
    .then(() => {
        console.log('Connect database success1');
    })
    .catch((err) => {
        console.log(`Connect database fail ${err}`);
    })


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