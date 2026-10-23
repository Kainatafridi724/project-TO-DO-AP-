
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  import { getDatabase, ref, set,get } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBu-UtI6uGT-PKnsUisjVYEl-cKDnOW5_Y",
    authDomain: "todo-edbbd.firebaseapp.com",
    databaseURL: "https://todo-edbbd-default-rtdb.firebaseio.com",
    projectId: "todo-edbbd",
    storageBucket: "todo-edbbd.firebasestorage.app",
    messagingSenderId: "691137613008",
    appId: "1:691137613008:web:7e353470b19f71371162d5",
    measurementId: "G-MMN37YS24Z"
  };

const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
var display=document.getElementById("display");

 window.onClick=function(e){


  if(display.value===""){
    alert("Conform..........................")
  }
  else{
 const db = getDatabase();
  set(ref(db, 'users/' +e ), {
    UserInp:display.value,
  });

}


     var li=document.createElement("li")
li.innerHTML+=`<li> <p>${display.value}</p>
  
  <button onclick="onGet(this)" style="background-color: rgb(158, 70, 241);display:flex;justify-content: center; border-radius: 20px; border: 1px white; width: 60px; height: 40px; font-size: larger; color: white;"  >edit</button> 
  <button onclick="onDel(this)" style="background-color: red; border-radius: 20px; border: 1px white; width: 60px; height: 40px; font-size: larger; color: white;">dela</button>
</li>`
  var ul=document.querySelector(".list")
  ul.appendChild(li)
    display.value="";
  }

console.log("rkjmn")


window.onGet=function (btn){
var last=btn.previousElementSibling
var userinput=prompt("Enter your name",last.innerText)
last.innerText=userinput
}
 window.onDel=function(btn) {
    btn.parentElement.remove()
}
function pressEnter(e){
    if(e.key==="Enter") onClick()
      
}






// console.log(worki);







