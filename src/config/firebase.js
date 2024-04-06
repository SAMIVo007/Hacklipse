// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB94I0vuY9OYK2i7afvnYGx9Y6qxlGUViM",
  authDomain: "hacklipse-cbdd7.firebaseapp.com",
  projectId: "hacklipse-cbdd7",
  storageBucket: "hacklipse-cbdd7.appspot.com",
  messagingSenderId: "511270846812",
  appId: "1:511270846812:web:0909a67e83bbf006c08199",
  measurementId: "G-CBY31CSR53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;