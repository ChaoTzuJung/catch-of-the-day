import Rebase from 're-base'; //mirror out state to firebase change (react/firebase) 
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdJ6gDY1D5YpdwY5P4wzKgrdezig0Pt00",
    authDomain: "catch-of-the-day-2305.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-2305.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export { firebaseApp };

// The is default export 
export default base;