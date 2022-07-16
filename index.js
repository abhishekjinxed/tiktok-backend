const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('foodRoutes.js');

const app = express();

app.use(express.json());

mongoose.connect(
  'mongodb+srv://rickc137:Asaprocky92@tiktokbackend.jgdtf7j.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log('Server is running...');
});
