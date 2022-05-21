/* Menu */

const menu = document.querySelector('#burger-menu');

function openMenu() {
    menu.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none"; 
}


/* Form Validation */

const form = document.querySelector('#form')
const inputName = document.querySelector('#contact-name');
const inputEmail = document.querySelector('#contact-name');
const textarea = document.querySelector('#contact-text');
const submitBtn = document.querySelector('#submit');
const validationName = document.querySelector('#validation-name');
const validationEmail = document.querySelector('#validation-email');
const validationTextarea = document.querySelector('#validation-textarea');
const validationSent = document.querySelector('#validation-sent')

form.addEventListener("submit", (event) => {
    
    
    let nameStatus = validateName(inputName.value, validationName);
    let emailStatus = validateEmail(inputEmail.value, validationEmail);
    let textareaStatus = validateTextarea(textarea.value, validationTextarea);
    
    if (nameStatus === false || emailStatus === false || textareaStatus === false){
        event.preventDefault();
    } else {
        validationSent.textContent = "Form sent";
    }
})

function validateName(name, validation){
    if (name.trim().length < 3 || name.trim().length > 100){
        validation.textContent = "Your name must be between 3 and 100 characters";
        return false;
    }else {
        validation.textContent = "";
    }
}

function validateEmail(email, validation){
    if (email.trim().length === 0){
        validation.textContent = "Your email must not be empty";
        return false;
    }else {
        validation.textContent = "";
    }
}

function validateTextarea(text, validation){
    if (text.trim().length < 3 || text.trim().length > 500){
        validation.textContent = "Your message must be between 3 and 500 characters"
        return false;
    }else {
        validation.textContent = "";
    }
}