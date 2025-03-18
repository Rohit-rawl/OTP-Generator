document.getElementById("genrate").onclick = function () {
   if(document.getElementById("check").checked){
    let number = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("getotp").innerHTML = number;
   } else{
   window.alert("Mere bhai check to kar ✅!");
   }
};