const form = document.getElementById("inputs");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();
    
    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be empty!");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty!");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(emailValue, "Email is in improper format!")
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty!");
    } else {
        setSuccessFor(password);
    }

    if (checkPasswordValue === "") {
        setErrorFor(checkPassword, "Please reenter your password!");
    } else if (passwordValue !== checkPasswordValue) {
        setErrorFor(checkPassword, "Password does not match");
    } else {
        setSuccessFor(checkPassword);
    }

}


function setErrorFor(input, error) {
    const inputContainer = input.parentElement.parentElement;
    const small = inputContainer.querySelector(".error")
    inputContainer.className = "input-field fail"
    small.innerText = error;
    console.log(inputContainer, small)
    setTimeout(()=>{
        inputContainer.className = "input-field"
    }, 4000);

}

function setSuccessFor(input) {
    const inputContainer = input.parentElement.parentElement;
    inputContainer.className = "input-field success"

}

function checkEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
