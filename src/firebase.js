import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig={
    apiKey: "AIzaSyCV_MMROnas95RuM20yOCNY8U_lItJ-0F8",
    authDomain: "peduligizi-71afd.firebaseapp.com",
    projectId: "peduligizi-71afd",
    storageBucket: "peduligizi-71afd.appspot.com",
    messagingSenderId: "613558690983",
    appId: "1:613558690983:web:8fea936b749fb39227a782",
    measurementId: "G-T93WL3SETD"
}
const app=initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export{auth, db}