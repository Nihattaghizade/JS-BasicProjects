"use strict";

const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const counterElement = document.querySelector(".counter");

let counter = 0;

function setColor(){
    counterElement.style.color = "white";
    if(counter < 0){
        counterElement.style.color = "red";
    }else if(counter > 0){
        counterElement.style.color = "green";
    }
}

increaseBtn.addEventListener("click", () =>{
    counter ++;
    setColor();
    counterElement.textContent = Math.abs(counter);
});

decreaseBtn.addEventListener("click", () =>{
    counter --;
    setColor();
    counterElement.textContent = Math.abs(counter);
});