import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB66Lvru7N0R7DI3beUmhY2EQ18l2s2dXc",
  authDomain: "blockchair-c65f7.firebaseapp.com",
  projectId: "blockchair-c65f7",
  storageBucket: "blockchair-c65f7.appspot.com",
  messagingSenderId: "368954675208",
  appId: "1:368954675208:web:73109d733112a58a9ac1bd",
  measurementId: "G-69YZ8M52NE"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
