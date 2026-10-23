
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";



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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 const auth = getAuth(app);







 var name=document.getElementById("name")
    var sinBtn=document.getElementById("signupBtn")
    
sinBtn.addEventListener("click",function(e){
   e.preventDefault();

    var email=document.getElementById("email").value
    var pswod=document.getElementById("pswod").value
  
createUserWithEmailAndPassword(auth, email,pswod)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   alert("conform sigup.")
    window.location.href = "log.html";
     
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert("Firebase Error: " + errorMessage); 
    // ..
    
  });
    console.log("hi");

})
