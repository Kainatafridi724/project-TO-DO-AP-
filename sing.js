
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAeNR3fAnXK4X5F3EWzd5xVI5BtO0f1F1g",
    authDomain: "shopping-app-c5e68.firebaseapp.com",
    projectId: "shopping-app-c5e68",
    storageBucket: "shopping-app-c5e68.firebasestorage.app",
    messagingSenderId: "870940409337",
    appId: "1:870940409337:web:d80dea49602145fe549128",
    measurementId: "G-NGJ7MSDGYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var email=document.getElementById("email");
var pswod=document.getElementById("pswod");
var signupBtn=document.getElementById("signupBtn");
var loginBtn=document.getElementById("loginBtn");
  const auth = getAuth(app);
signupBtn.addEventListener("click", function(){

   
createUserWithEmailAndPassword(auth, email.value, pswod.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
                window.location.href = "index.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); 
console.log("working");

})

loginBtn.addEventListener("click", function () {

    signInWithEmailAndPassword(auth, email.value, pswod.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("successful signin", user)
            // ...
            window.location.href = "index.html";
             
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errror in firebase login",error)
                  

        });
        
      })



