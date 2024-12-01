const inputInner = document.getElementById("text");
const counterElement = document.querySelector(".count");

function actionOnInput(){
    counterElement.textContent = inputInner.value.length;

    if(inputInner.value.length === 0){
        inputInner.style.border = "2px solid transparent";
    }else if(inputInner.value.length > 10){
        inputInner.style.border = "2px solid green";
        inputInner.style.color = "green";
    }else{
        inputInner.style.border = "2px solid red";
        inputInner.style.color = "red";
    }
}

inputInner.addEventListener("input", actionOnInput);