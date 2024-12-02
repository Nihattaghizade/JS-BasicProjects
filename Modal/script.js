"use strict";

const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");

const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");

const openModal = () => {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");

  document.addEventListener("keydown", closeModalWithEsc);
};

const closeModal = () => {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
};

const closeModalWithEsc = (event) => {
  if (event.keyCode === 27) { 
    closeModal();
  }
};

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlayElement.addEventListener("click", closeModal);