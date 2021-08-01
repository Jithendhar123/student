import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyAo78gO06aPgSAcpLB3LT_NYN1KUs9Pahw",
    authDomain: "student-cb66e.firebaseapp.com",
    databaseURL: "https://student-cb66e-default-rtdb.firebaseio.com",
    projectId: "student-cb66e",
    storageBucket: "student-cb66e.appspot.com",
    messagingSenderId: "97083772947",
    appId: "1:97083772947:web:38caaa850c8155cb15afe6",
    measurementId: "G-5051LGFBT9"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
