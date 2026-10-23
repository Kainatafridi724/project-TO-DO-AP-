import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu-UtI6uGT-PKnsUisjVYEl-cKDnOW5_Y",
  authDomain: "todo-edbbd.firebaseapp.com",
  databaseURL: "https://todo-edbbd-default-rtdb.firebaseio.com",
  projectId: "todo-edbbd",
  storageBucket: "todo-edbbd.firebasestorage.app",
  messagingSenderId: "691137613008",
  appId: "1:691137613008:web:d04011791207c0c81162d5",
  measurementId: "G-FLVFVX48X4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

var email=document.getElementById("email");
var pswod=document.getElementById("pswod");
var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault(); 

  

  if (email === "") { 
    alert("Please enter your email!"); 
    return; 
  } 
  if (pswod === "") { 
    alert("Please enter your password!"); 
    return; 
  }
var email=document.getElementById("email").value
    var pswod=document.getElementById("pswod").value
  signInWithEmailAndPassword(auth, email, pswod)
    .then((userCredential) => { 
      const user = userCredential.user; 
      alert("Login Confirmed!");
      window.location.href = "todo.html"; 
    }) 
    .catch((error) => { 
      const errorCode = error.code; 
      const errorMessage = error.message; 
      console.log("error in firebase login", error);
      
      
    });
});

