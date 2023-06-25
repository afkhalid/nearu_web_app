import FIRE_STORE_CONFIG from "./firestore.json";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(FIRE_STORE_CONFIG);

export default firebaseApp;
