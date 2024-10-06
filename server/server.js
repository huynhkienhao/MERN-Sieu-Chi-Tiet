const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const connectDb = require('./Services/ConnectDbService');

const port = 5000;

// Middleware apply cors add all request
app.use(cors());

// connect database
connectDb();

// Middleware Router
app.use('/users', userRoute);
app.use('/api/auth', authRoute);


app.listen(port, () => {
    console.log(`Server is running ${port}`);
});