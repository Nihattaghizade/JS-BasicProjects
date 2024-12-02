"use strict";

const insertElement = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    console.log(event);
    insertElement.innerHTML = `
        <div class="key">
           ${event.key}
           <small>event.key</small>
        </div>
   
        <div class="key">
           ${event.keyCode}
           <small>event.keyCode</small>
        </div>
   
        <div class="key">
           ${event.code}
           <small>event.code</small>
        </div>`;
});