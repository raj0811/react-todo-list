import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqGI1Ohb__tJFwNgEGOT4VfMFbKkpFZys",
  authDomain: "todo-list-react-78a34.firebaseapp.com",
  projectId: "todo-list-react-78a34",
  storageBucket: "todo-list-react-78a34.appspot.com",
  messagingSenderId: "574303244300",
  appId: "1:574303244300:web:f7d5bdfd25db87d138de29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


