const express = require('express');
const app = express();
const userRoute = require('./Router/UserRoute');
const connectDb = require('./Services/ConnectDbService');

const port = 5000;

// connect database
connectDb();

// Middleware Router
app.use('/users', userRoute);


app.listen(port, () => {
    console.log(`Server is running ${port}`);
});