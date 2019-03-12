<!-- Firebase App is always required and must be first -->
    <script src="/__/firebase/5.8.5/firebase-app.js"></script>

    <!-- Add additional services that you want to use -->
    <script src="/__/firebase/5.8.5/firebase-auth.js"></script>
    <script src="/__/firebase/5.8.5/firebase-database.js"></script>

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

var config = {
    apiKey: "AIzaSyCDT4bbsuyCKZomW0CJrqBo1pajqhJdlYA",
    authDomain: "cashflowlanding.firebaseapp.com",
    databaseURL: "https://cashflowlanding.firebaseio.com",
    projectId: "cashflowlanding",
    storageBucket: "cashflowlanding.appspot.com",
    messagingSenderId: "561867908629"
};
firebase.initializeApp(config);
var defaultDatabase = firebase.database();
console.log(defaultDatabase)