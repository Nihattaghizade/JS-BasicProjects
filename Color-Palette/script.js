"use strict";

const cards = document.querySelectorAll('.color');


cards.forEach(function(card) {
    card.addEventListener('mouseover', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
    });
});