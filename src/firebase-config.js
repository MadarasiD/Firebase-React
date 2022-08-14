
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVrJJET_2gl20zA9Vtm38O10NwoMAX33Y",
  authDomain: "fir-vizsga-d7925.firebaseapp.com",
  projectId: "fir-vizsga-d7925",
  storageBucket: "fir-vizsga-d7925.appspot.com",
  messagingSenderId: "843073959454",
  appId: "1:843073959454:web:1022ee7aa0266b6691200f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);