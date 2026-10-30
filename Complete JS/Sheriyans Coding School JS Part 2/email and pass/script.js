let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(pass.value);

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if(!passans){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if(isValid){
        document.querySelector("#successMessage").textContent = "Everything is correct"
    }
})