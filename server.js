const express = require('express');
const dotenv = require('dotenv');

// Route files
const campgrounds = require('./routes/campgrounds')

// Load env vars
dotenv.config({path:'./config/config.env'});

const app=express();

// Mount routers
app.use('/api/v1/campgrounds', campgrounds);

const PORT = process.env.PORT;
app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV , 'mode on port ', PORT));