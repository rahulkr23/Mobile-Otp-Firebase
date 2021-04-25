import firebase from 'firebase';


const config={
    apiKey: "AIzaSyD5uOgLTUU4ddU95U1FQkI0sgcSbL5luKY",
    authDomain: "otp-auth-efa1c.firebaseapp.com",
    projectId: "otp-auth-efa1c",
    storageBucket: "otp-auth-efa1c.appspot.com",
    messagingSenderId: "620916496649",
    appId: "1:620916496649:web:c5ed7ba4b3331b27a61bd8"
}
firebase.initializeApp(config);
export default firebase