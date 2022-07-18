import * as dotenv from 'dotenv'
import express from 'express';
const app = express();
import mongoose from 'mongoose';
const port = 8080;

dotenv.config()
import { initializeApp } from "firebase/app";
import { getStorage,ref,getDownloadURL } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBYbEmvbRhnbWxKEtAmLVVGcz12PlXDA0o",
  authDomain: "short-video-39618.firebaseapp.com",
  projectId: "short-video-39618",
  storageBucket: "short-video-39618.appspot.com",
  messagingSenderId: "1082736452420",
  appId: "1:1082736452420:web:75f750fa7a33c5f75d6d11",
  measurementId: "G-W3BNDXFZTW"
};
// Initialize Firebase
const fbase = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(fbase);
getDownloadURL(ref(storage, 'IMG-20220718-WA0026.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

  console.log(url);
   


  })
  .catch((error) => {
    console.log(error);
  });


mongoose.connect(
  process.env.MONGO_URL,
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
