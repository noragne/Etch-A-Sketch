// Variables for DOM elments
let container = document.querySelector("#container");
let btnReset = document.querySelector("#reset");
let btnSetGrid = document.querySelector("#setGrid");
let pen = document.querySelector("#pen");


// Function to create a grid with num width & num height
function setGrid(num) {
    // Set the grid
    container.style.grid = `repeat(${num}, 1fr) / repeat(${num}, 1fr)`;

    // create boxes in the grid
    for (let i = 0; i < num ** 2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}









// Populate the page
setGrid(16);