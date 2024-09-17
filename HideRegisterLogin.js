document.addEventListener("DOMContentLoaded",function(){

    const signUp = document.getElementById("containerLogin");
    const register = document.getElementById("containerRegister");

    const registerBtn = document.getElementById("registerBtn"); 
    const signUpBtn = document.getElementById("loginButton");

    registerBtn.addEventListener("click", () => {
        console.log("Create Account button clicked");
        register.style.display = "block";  
        signUp.style.display = "none";     
    });

    signUpBtn.addEventListener("click", () => {
        register.style.display = "none";   
        signUp.style.display = "block";    
    });
});