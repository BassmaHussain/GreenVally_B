import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD58oLrqlPTQirro7v0Bd0Q_kGeMxhaGoY",
    authDomain: "basproj-93df5.firebaseapp.com",
    projectId: "basproj-93df5",
    storageBucket: "basproj-93df5.appspot.com",
    messagingSenderId: "400760165400",
    appId: "1:400760165400:web:48a833a920cbdb74235f6d",
    measurementId: "G-7470KGZ0Y7"
}

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const authentication = getAuth(app)