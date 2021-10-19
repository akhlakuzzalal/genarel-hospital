import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";

const initFirebase = () => {
   initializeApp(firebaseConfig);
}
export default initFirebase;