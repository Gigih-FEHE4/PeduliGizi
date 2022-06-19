/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCV_MMROnas95RuM20yOCNY8U_lItJ-0F8",
  authDomain: "peduligizi-71afd.firebaseapp.com",
  projectId: "peduligizi-71afd",
  storageBucket: "peduligizi-71afd.appspot.com",
  messagingSenderId: "613558690983",
  appId: "1:613558690983:web:8fea936b749fb39227a782",
  measurementId: "G-T93WL3SETD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  (<React.StrictMode>
    <App />
  </React.StrictMode>),
  document.getElementById('root') || document.createElement('div')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
