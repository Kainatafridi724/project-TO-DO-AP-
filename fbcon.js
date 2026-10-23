
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  import { getDatabase, ref,push,set } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  

   
    var refr = ref(database, `Quiz_Results`);
    var dataref = push(refr);
    var id = dataref.key;
    
    var resultObject = {
        id: id,
        totalQuestions: question.length,
        correctAnswers: score,
        wrongAnswers: wrong,
        finalScore: `${score}/${question.length}`
    };

    set(dataref, resultObject)
    .then(() => {
        alert("Your quiz result has been successfully saved to Firebase!");
    })
    .catch((error) => {
        alert("Firebase Database Error: " + error.message);
    });

function saveQuestions() {
     var quesRefr = ref(database, 'Quizes'); 
    var sysOpp = {};
    
    question.forEach((item, index) => {
       
        sysOpp[`Quiz_Results_${index+1}`] = item;
    
    });
   
 set(quesRefr,sysOpp)
    .then(() => {
        console.log("All questions successfully synced to Firebase!");
    })
    .catch((error) => {
        console.error("Error saving questions: ", error);
    });
    
}

saveQuestions()