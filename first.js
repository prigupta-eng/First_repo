// const { use } = require("react");

function myFunctionG() {
   alert("Google button clicked!");
}
function myFunctionA() {
    alert("Apple button clicked!");
    localStorage.setItem("username", "JohnDoe");
}


const fb_box = document.getElementById("f_box");
fb_box.addEventListener("click" , () => {
    
    let username = localStorage.getItem("username");
    alert("Facebook button clicked! , }" + username);
});

