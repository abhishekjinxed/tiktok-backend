import express from 'express';
const app = express();
import mongoose from 'mongoose';
const port = 8080;
import env from 'enc'
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('error in connection'+err);
    } else {
      console.log('mongodb is connected');
    }
  }
);
//create a server object:
app.listen(port, () => {
  console.log('starting the server');
});
