"use strict";

const eyeButton = document.getElementById('btn');
const inputType = document.getElementById('input');

function pwShowHide(){
    if(inputType.type === 'password'){
        inputType.type = 'text';
        eyeButton.innerHTML = `<img src="./icons/openEye.svg" alt="" />`;
    } else {
        inputType.type = 'password';
        eyeButton.innerHTML = `<img src="./icons/closeEye.svg" alt="" />`;
    }
}

eyeButton.addEventListener('click', pwShowHide);

