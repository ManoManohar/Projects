import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLgSIDifpZs5ot_YEMQjOJ4iZ8hDyNBa8",
  authDomain: "netflix-clone-3883e.firebaseapp.com",
  projectId: "netflix-clone-3883e",
  storageBucket: "netflix-clone-3883e.appspot.com",
  messagingSenderId: "1098649169004",
  appId: "1:1098649169004:web:6a0e939e6e31e30833bc49"
};


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth}
