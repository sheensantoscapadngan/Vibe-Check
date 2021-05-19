const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();

//Parse body as JSON
app.use(bodyParser.json());

app.use('/api/user', require('./routes/api/user'));

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
 