
var display=document.getElementById("display");
function onClick(){
  var li=document.createElement("li")
  li.innerHTML+=`<li> <p>${display.value}</p>
  
  <button onclick="onGet(this)" style="background-color: rgb(158, 70, 241); border-radius: 20px; border: 1px white; width: 60px; height: 40px; font-size: larger; color: white;"  >edit</button> 
  <button onclick="onDel(this)" style="background-color: red; border-radius: 20px; border: 1px white; width: 60px; height: 40px; font-size: larger; color: white;">dela</button>
</li>`
  var ul=document.querySelector(".list")
  ul.appendChild(li)
    display.value="";
}
function onSubmit(btn){

var list=document.querySelector(".list")
list.removeChild(list.lastChild)
display.innerHTML = ""
}
function onGet(btn){
var last=btn.previousElementSibling
var userinput=prompt("Enter your name",last.innerText)
last.innerText=userinput
}
function onDel(btn) {
    btn.parentElement.remove()
}
function pressEnter(e){
    if(e.key==="Enter") onClick()
}



// var display=document.getElementById("display")
// function onClick(){
//   var li=document.createElement("li")
//   li.innerHTML=display.value
//   var ul=document.querySelector(".list")
//   ul.appendChild(li)
//   display.value+=""
// }
// function onSubmit(){
//    var list=document.querySelector(".list")
//   list.removeChildChild(list,lastChild)

// }










