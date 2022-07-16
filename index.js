import express from 'express';
import mongoose from 'mongoose';

const app = express();

const url =
  'mongodb+srv://rickc137:Asaprocky92@tiktokbackend.jgdtf7j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  app.listen(5000, () => {
    console.log('Server has started!');
  });
});
