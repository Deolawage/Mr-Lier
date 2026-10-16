
//const btn = document.getElementById("dragButton");
const container = document.getElementById("container");

const canvas = document.createElement("div");
canvas.id = 'canvas';
container.appendChild(canvas);


const btn = document.createElement("button");
btn.textContent = "Click Me";
btn.style.padding = "20px"
btn.style.fontSize = "15px";
btn.style.color = "red"
btn.id = 'drag-button';
 container.appendChild(btn);

btn.addEventListener("click", (e) => {
e.preventDefault();
btn.style.color = getRandomColor();
btn.style.backgroundColor = getRandomColor();

console.log(getRandomColor());

});
 

function getRandomColorValue(){
    return Math.floor(Math.random() * 256);
}

function getRandomColor(){
    const r = getRandomColorValue();
    const g = getRandomColorValue();
    const b = getRandomColorValue();

    return `rgb(${r}, ${g}, ${b})`;
}

