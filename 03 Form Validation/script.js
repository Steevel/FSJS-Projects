const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const signUpBtn = document.getElementById('signupBtn');
const errorMsg = document.getElementById('errorMessage');
const successMsg = document.getElementById('successMessage');


function formValidator() {
    console.log(email.value)
    // errorMsg.innerText = ""
    // if (e.preventDefault) {
    //     e.preventDefault();
    // }
    // e.returnValue = false;
    if ((userName.value.length > 0 && email.value.length > 0) && (confPassword.value !== password.value)) {
        e.preventDefault();
        console.log("password does not match");
        errorMsg.innerText = "Password does not match";
    }
    else {
        successMsg.innerText = "Form submitted successfully"
        // userName.value = "";
        // email.value = "";
        // password.value = "";
        // confPassword.value = "";
    }
}

signUpBtn.addEventListener("submit", formValidator(), false)


//  12345678
//  87654321