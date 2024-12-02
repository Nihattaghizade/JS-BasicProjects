"use strict";

const inputElement = document.getElementById("input");
const addButton = document.getElementById("add");
const ulElement = document.querySelector("ul");

const tasks = [];

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const givenValue = inputElement.value.trim();

    if(givenValue.length === 0) {
        return;
    }

    tasks.unshift(givenValue);
    displayTasks();

    inputElement.value = "";
});


const displayTasks = () => {
    ulElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const liElement = document.createElement("li");
        const spanElement = document.createElement("span");
        const buttonElement = document.createElement("button");
        
        spanElement.textContent = task;
        buttonElement.textContent = "Delete Task";
        buttonElement.className = "btn";

        buttonElement.addEventListener("click", () => {
            deleteTasks(index);
        });

        liElement.insertAdjacentElement("afterbegin", spanElement);
        liElement.insertAdjacentElement("beforeend", buttonElement);
           
        ulElement.insertAdjacentElement("afterbegin", liElement);
    }); 

};


const deleteTasks = (index) => {
    tasks.splice(index, 1);
    displayTasks();
};
