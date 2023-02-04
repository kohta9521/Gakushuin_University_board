import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQGGDU4HUXCdsKaBI-ca77WQVBcrKQ3T8",
    authDomain: "twitter-clone-8ba70.firebaseapp.com",
    projectId: "twitter-clone-8ba70",
    storageBucket: "twitter-clone-8ba70.appspot.com",
    messagingSenderId: "193123878225",
    appId: "1:193123878225:web:019f84a1ce85028be13f70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;