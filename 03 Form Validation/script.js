const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const signUpBtn = document.getElementById('signupBtn');
const errorMsg = document.getElementById('errorMessage');
const successMsg = document.getElementById('successMessage');


signUpBtn.addEventListener("click", (event) => {
    console.log(email.value)
    errorMsg.innerText = ""
    // event.preventDefault();
    if ((userName.value.length > 0 && email.value.length > 0) && (confPassword.value !== password.value)) {
        console.log("password does not match");
        errorMsg.innerText = "Password does not match";
    }
    // else {
    //     successMsg.innerText = "Form submitted successfully"
    //     userName.value = "";
    //     email.value = "";
    //     password.value = "";
    //     confPassword.value = "";
    // }
})


//  12345678
//  87654321