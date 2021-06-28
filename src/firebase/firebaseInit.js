  import firebase from "firebase/app";
  import "firebase/firestore";
  
  var firebaseConfig = {
    apiKey: "AIzaSyDBSxvY2ad-QffmPCgYCvBmsnVY9_QQF9c",
    authDomain: "fir-blog-66416.firebaseapp.com",
    projectId: "fir-blog-66416",
    storageBucket: "fir-blog-66416.appspot.com",
    messagingSenderId: "740441879200",
    appId: "1:740441879200:web:911912c0af3807a357cfc5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestat = firebase.firestore.FieldValue.serverTimestamp; 

  export{timestat};
  export default firebaseApp.firestore();
