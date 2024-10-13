const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const connectDb = require('./Services/ConnectDbService');

// const port = 5000;

require('dotenv').config()
// Middleware apply cors add all request
app.use(cors());
// Middleware get info from client by req.body
app.use(express.json());

// connect database
connectDb();

// Middleware Router
app.use('/auth/admin', userRoute);
app.use('/api/auth', authRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
});