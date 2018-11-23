// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsGQUjn8E7Ek5791wZFLHeF4OteA-JKEk",
    authDomain: "smart4brno.firebaseapp.com",
    databaseURL: "https://smart4brno.firebaseio.com",
    projectId: "smart4brno",
    storageBucket: "smart4brno.appspot.com",
    messagingSenderId: "331371632769"
  };
  firebase.initializeApp(config);

// Reading Firebase 
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}