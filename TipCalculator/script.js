"use strict";

const tipCost = document.getElementById("tipCost");
const totalCost = document.getElementById("totalCost");

const billInp = document.getElementById("billInp");
const tipInp = document.getElementById("tipInp");
const peopleInp = document.getElementById("peopleInp");

const decreaseBtnTip = document.getElementById("decreaseBtnTip");
const increaseBtnTip = document.getElementById("increaseBtnTip");

const decreaseBtnPeo = document.getElementById("decreaseBtnPeo");
const increaseBtnPeo = document.getElementById("increaseBtnPeo");

let percentValue = Number(tipInp.value.slice(0,-1));
let peopleValue = Number(peopleInp.value);
let billValue = Number(billInp.value);

billInp.addEventListener("input", () => {
    billValue = Number(billInp.value);

    let newValue = `${billValue}`;

    billInp.value = newValue;

    calculateTipCost();
    calculateTotalCost();
});

decreaseBtnTip.addEventListener("click", () => {
    if(percentValue >= 0 && percentValue <= 5){
        percentValue = 0;
    } else if(percentValue <= 100){
        percentValue -= 5;
    }
    tipInp.value = `${String(percentValue)}%`;

    calculateTipCost();
    calculateTotalCost();
});

increaseBtnTip.addEventListener("click", () => {
    if(percentValue >= 95 && percentValue <= 100){
        percentValue = 100;
    } else if(percentValue >= 0 && percentValue < 95){
        percentValue += 5;
    }
    tipInp.value = `${String(percentValue)}%`;
    
    calculateTipCost();
    calculateTotalCost();
});

decreaseBtnPeo.addEventListener("click", () => {
    if(peopleValue > 1){
        peopleValue -= 1;
        peopleInp.value = `${String(peopleValue)}`;  

        calculateTipCost();
        calculateTotalCost();
    } 
    
});

increaseBtnPeo.addEventListener("click", () => {
    if(peopleValue < 10){
        peopleValue += 1;
        peopleInp.value = `${String(peopleValue)}`;   

        calculateTipCost();
        calculateTotalCost();
    }
});

const calculateTipCost = () => {
    tipCost.textContent = `$${String(((billValue * percentValue)/100)/peopleValue)}`;
    
};

const calculateTotalCost = () => {
    totalCost.textContent = `$${String((billValue / peopleValue) + (((billValue * percentValue)/100)/peopleValue))}`;
};

