const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confPassword');
const signUpBtn = document.getElementById('signupBtn');
const errorMsg = document.getElementById('errorMessage');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
});

function showErrorMessage(element, message, id) {
    // 6:53
    const inputElement = element.parentNode;
    const usernameInput = inputElement.querySelector(`#${id}`)
    usernameInput.classList.remove("border-gray-300")
    usernameInput.classList.add("border-red-600", "ring-1", "ring-red-500")
    const displayError = inputElement.querySelector("#error");


    displayError.innerText = message;
}

const isValidEmail = email => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}

function validateInput() {
    console.log("validating");
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmationValue = confirmPassword.value.trim()

    if (userNameValue === "") {
        showErrorMessage(userName, "User name is required", "name")
    }

    if (emailValue === "") {
        showErrorMessage(email, "Email is required", "email")
    } else if (!isValidEmail(emailValue)) {
        showErrorMessage(email, "Provide a valid email address", "email")
    }

    if (passwordValue === "") {
        showErrorMessage(password, "Password is required", "password")
    } else if (passwordValue.length < 8) {
        showErrorMessage(password, "Password should be atleast 8 charecters", "password")
    }

    if (passwordConfirmationValue === "") {
        showErrorMessage(confirmPassword, "Confirm password is required", "confPassword")
    } else if (passwordConfirmationValue !== passwordValue) {
        showErrorMessage(confirmPassword, "Password does not match", "confPassword")
    }
}
