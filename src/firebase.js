import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBkqN7jc8Y3FTCU1hYLjryLP0y74584tHY",
    authDomain: "telegram-clone-b7659.firebaseapp.com",
    projectId: "telegram-clone-b7659",
    storageBucket: "telegram-clone-b7659.appspot.com",
    messagingSenderId: "645595951915",
    appId: "1:645595951915:web:c9b193c5f5dcabe0b08b6e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;