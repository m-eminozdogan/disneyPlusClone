import  {initializeApp}  from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    // firebaseconfig keys
    apiKey: "AIzaSyDdvbpBGMPfkpQmMpdd2m7HEhwOM-pyeU4",
    authDomain: "disneyplus-clone-d8672.firebaseapp.com",
    projectId: "disneyplus-clone-d8672",
    storageBucket: "disneyplus-clone-d8672.appspot.com",
    messagingSenderId: "58351980408",
    appId: "1:58351980408:web:f7de3121dd10e7d0adc28d",
    measurementId: "G-3C45DXY5ED"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();



// import firebase from "firebase/app";
// import 'firebase/firebase-app'
// import 'firebase/firestore'

// const firebaseConfig = {
//     // firebaseconfig keys
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export { auth, provider, storage };
// export default db;
