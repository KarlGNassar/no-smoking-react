import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDe4Jr8QPeE9NDyfxsrHJWwHRkfVQc9JR8",
    authDomain: "no-smoking-react.firebaseapp.com",
    projectId: "no-smoking-react",
    storageBucket: "no-smoking-react.appspot.com",
    messagingSenderId: "110980884703",
    appId: "1:110980884703:web:6aae8f72008515728c616a",
    measurementId: "G-N1W0TWP4PZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider} 