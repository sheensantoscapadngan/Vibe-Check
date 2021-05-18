const express = require('express');
import { connectDB } from './config/db' 

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();

app.get('/', (req:any, res:any) => res.send("HELLO WORLD"));

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));