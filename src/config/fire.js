import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBaTw8BbIMtN1mVdCEyu5bwp7jFHMmJyss",
  authDomain: "urbanexpress-dd8ff.firebaseapp.com",
  databaseURL: "https://urbanexpress-dd8ff.firebaseio.com",
  projectId: "urbanexpress-dd8ff",
  storageBucket: "urbanexpress-dd8ff.appspot.com",
  messagingSenderId: "532703137701",
  appId: "1:532703137701:web:d80d6991c15eca3095e24c",
  measurementId: "G-F8F930QR1M"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;