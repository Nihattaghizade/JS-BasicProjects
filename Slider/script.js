"use strict";

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const image = document.querySelector(".slider-image");

const images = ["beach","building","city","mozaic","sky"];

let index = 0;

rightButton.addEventListener("click", () => {
    if(index < images.length - 1){
        index++;
    } else {
        index = 0;
    }

    displayImage();
});

leftButton.addEventListener("click", () => {
    if(index > 0){
        index--;
    } else {
        index = images.length - 1;
    }

    displayImage();
});

const displayImage = () => {
    image.style.backgroundImage = `url("images/${images[index]}.jpg")`;
};

