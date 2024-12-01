function getRandomColor(){
    let randomColor =  'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    document.body.style.backgroundColor = randomColor;
}

document.querySelector('#btn').addEventListener('click', getRandomColor);