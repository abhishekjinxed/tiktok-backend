import express from 'express';
const app = express();
import mongoose from 'mongoose';
const port = 8080;

const url =
  'mongodb+srv://rickc137:Asaprocky92@tiktokbackend.jgdtf7j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('error in connection');
    } else {
      console.log('mongodb is connected');
    }
  }
);
//create a server object:
app.listen(port, () => {
  console.log('starting the server');
});
