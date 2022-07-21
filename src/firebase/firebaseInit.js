// Import the functions you need from the SDKs you need
import firebase from "firebase"

import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGZs1gMjHcxgzTmVfPskjhC6YUldvw5I",
  authDomain: "fireblogsyt-27b5d.firebaseapp.com",
  projectId: "fireblogsyt-27b5d",
  storageBucket: "fireblogsyt-27b5d.appspot.com",
  messagingSenderId: "267860882874",
  appId: "1:267860882874:web:37bb47a7fca1dd1fdad983"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp, app }
export default app.firestore()
