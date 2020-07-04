  
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0ca0HOB1WnWyNkTG5blqDZd_0dS9tN-o",
    authDomain: "network-323df.firebaseapp.com",
    databaseURL: "https://network-323df.firebaseio.com",
    projectId: "network-323df",
    storageBucket: "network-323df.appspot.com",
    messagingSenderId: "79306642781",
    appId: "1:79306642781:web:17d2e7de17da06b4f104b4"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };