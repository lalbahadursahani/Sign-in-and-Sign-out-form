let signupBtn=document.getElementById("signupBtn");
let sininBtn=document.getElementById("signinBtn");
let namefield=document.getElementById("namefield");
let title =document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    
}
signupBtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    
}


