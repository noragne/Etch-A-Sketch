// Variables for DOM elments
let container = document.querySelector("#container");
let btnReset = document.querySelector("#reset");
let btnSetGrid = document.querySelector("#setGrid");
let pen = document.querySelector("#pen");


// On  Page Load the page
setGrid(16);
draw();

// Create a grid with num width & num height
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

// Buttton Set Grid
// Set the size of the grid.
// prompt for an int
btnSetGrid.addEventListener('click', () => {
    // Prompt for number for set the grid
    let num = prompt("You want a grid of: (give a number)");
    // Clean the grid
    container.innerHTML = '';
    // Set the grid
    setGrid(num);
    draw();

});


// Toggle between draw and erase
let penOn = true;
pen.addEventListener("click", () => {
    penOn = !penOn;
    pen.textContent = penOn ? "Pen" : "Eraser";

});

// Drawing on grid
function draw() {
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach(box =>
        box.addEventListener('mouseover', () => {
            if (penOn) {
                box.style.backgroundColor = "black";
            } else {
                box.style.backgroundColor = "white";
            }
        }
        ));
}

// Reset The Drawing for the grid.
btnReset.addEventListener('click', () => {
    let boxes = document.querySelectorAll('div.box');
    boxes.forEach(box => box.style.backgroundColor = "white")
});






