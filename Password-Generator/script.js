"use strict";


const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>+`<.*-@é";


const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");


const passwordEl = document.querySelector(".password");


const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");


const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const counterEl = document.querySelector(".generator__length-counter span");


const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");



let counter = 6;
let myPassword = "";

counterEl.textContent = counter;

plusBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if(counter < 20){
        counter++;
    }
    counterEl.textContent = counter;
});

minusBtn.addEventListener("click", (event) => {

    event.preventDefault();

    if(counter > 6){
        counter--;
    }
    counterEl.textContent = counter;
});

const getRandomCharacter = () => {
    let characters = [];

    if (upperInput.checked) {
        characters.push(
            upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        );
    }

    if (lowerInput.checked) {
        characters.push(
            lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
        );
    }

    if (numbersInput.checked) {
        characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (symbolsInput.checked) {
        characters.push(special[Math.floor(Math.random() * special.length)]);
    }

    if(!characters.length) return "";

    return characters[Math.floor(Math.random() * characters.length)];
};

generateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let password = "";

    for(let i=0; i < counter; i++){
        password += getRandomCharacter();
    }

    passwordEl.textContent = password;
});

copyBtn.addEventListener("click", (event) => {
    event.preventDefault();

    backdropEl.classList.add("active");
    modalEl.classList.add("active");

    const passwordValue = passwordEl.textContent;

    if(passwordValue) {
        modalTitle.textContent = "Success";
        modalMessage.textContent = `Your password (${passwordValue}) successfully copied.`;
    } else {
        modalTitle.textContent = "Error";
        modalMessage.textContent = `There is nothing to copy.`;
    }
});

const closeModal = () => {
    backdropEl.classList.remove("active");
    modalEl.classList.remove("active"); 
};
            
backdropEl.addEventListener("click", closeModal);
modalBtn.addEventListener("click", closeModal)