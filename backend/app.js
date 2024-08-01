const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const registrationRoutes = require('./routes/registrationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/gym-portfolio'
  ).then(() => {
      console.log('Connected to database!!!!!! go forward')
  }).catch(() => {
      console.log('Connection failed!')
  });
  

app.use(cors());
app.use(bodyParser.json());

app.use('/api/registrations', registrationRoutes);
app.use('/api/payments', paymentRoutes);


app.listen(5000);

