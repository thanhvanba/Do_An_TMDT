﻿const form = document.getElementById('Noidung2');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    //isValid = form.checkValidity();
    //console.log(password1El);
    //// Style main message for an error
    //if (!isValid) {
    //    message.textContent = 'Please fill out all fields.';
    //    message.style.color = 'red';
    //    messageContainer.style.borderColor = 'red';
    //    return;
    //}
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        document.querySelector("button").disabled = false;
    } else {
        passwordsMatch = false;
      //  message.textContent = 'Make sure passwords match.';
        //message.style.color = 'red';
        //messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        document.querySelector("button").disabled = true;
        return;
    }
    //// If form is valid and passwords match
    //if (isValid && passwordsMatch) {
    //    message.textContent = 'Successfully Registered!';
    //    message.style.color = 'green';
    //    messageContainer.style.borderColor = 'green';
    //}
}
