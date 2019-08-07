var email = document.querySelector('#username'),
    password = document.querySelector('#password');

function onEmailFocus(e) {
    e.target.parentElement.classList.add("focusWithText");
}

function onEmailBlur(e) {
    if (e.target.value == "") {
        e.target.parentElement.classList.remove("focusWithText");
    }
}

function onPasswordFocus(e) {
    e.target.parentElement.classList.add("focusWithText");
}

function onPasswordBlur(e) {
    if (e.target.value == "") {
        e.target.parentElement.classList.remove("focusWithText");
    }
}

email.addEventListener('focus', onEmailFocus);
email.addEventListener('blur', onEmailBlur);
password.addEventListener('focus', onPasswordFocus);
password.addEventListener('blur', onPasswordBlur);
