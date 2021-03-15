import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyBVQqwVmnaiS9SlLiNdkEo3QIkHyq89wpk",
    authDomain: "chrono-meetup.firebaseapp.com",
    projectId: "chrono-meetup",
    storageBucket: "chrono-meetup.appspot.com",
    messagingSenderId: "1042000849255",
    appId: "1:1042000849255:web:4453061007431f021ae7c2",
    measurementId: "G-W48TPRFGC7"
});

export const auth = app.auth();
export default app;