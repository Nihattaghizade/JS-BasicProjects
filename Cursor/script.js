"use strict";

const outer = document.querySelector(".cursor--outer");
const inner = document.querySelector(".cursor-inner");
const btn = document.querySelector(".btn");

const { width, height, borderRadius } = window.getComputedStyle(outer);

window.addEventListener("mousemove", (event) => {
    const { x, y, target } = event;

    const { x: btnCoordsX, y:btnCoordsY } =btn.getBoundingClientRect();

    outer.style.transform = `translate(${x}px, ${y}px)`;
   

    if (target.classList.contains("btn")) {
        const {
                width: btnWidth,
                height: btnHeight,
                borderRadius: btnRadius,
            } = window.getComputedStyle(btn);
        
        outer.style.width = btnWidth;
        outer.style.height = btnHeight;
        outer.style.margin = 0;
        outer.style.borderRadius = btnRadius;
        outer.style.transform = `translate(${btnCoordsX}px, ${btnCoordsY}px)`;
    } else {
        outer.style.width = width;
        outer.style.height = height;
        outer.style.borderRadius = borderRadius;
    }
});