const rangeLabel = document.querySelector('.range-label'); //for the label element 
const rangeInput = document.querySelector("#gridSize");   // the range input that used for selecting the grid size
const gridContainer = document.querySelector("#grid-container"); //the div in which grid items are created
const colorSelector = document.querySelector("#colorSelector");
const staticMode = document.querySelector(".static-color");
const rainbowMode = document.querySelector(".rainbow-mode");
const eraser = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

let gridSize = rangeInput.value; //initial size of the grid (16)
rangeLabel.textContent = `${rangeInput.value}x${rangeInput.value}`; // adds the initial value to the label (16)
let mouseDown = false; // indicating if mouse 1 is being held down
let currentColor = colorSelector.value;
let colorMode = "static";


// a function to chnage the label of the range based on its current value.
// this function is called when the range is interacted with (inside the rangeInput eventListener)
function updateLabel(e){
    const labelValue = e.target.value;
    rangeLabel.textContent = `${e.target.value}x${e.target.value}`;
    gridSize = labelValue;
    // console.log('current size = '+gridSize+'x'+gridSize);
}

// when the value of the ranged changes, this functionn is called to create new empty grid
// with the new size
function createGrid(size){
    gridContainer.replaceChildren(); // empties the grid container before making a new grid
    for (let index = 0; index < size*size; index++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.style.backgroundColor = 'white';
        gridItem.style.width = `calc(100% / ${size})`;
    }
    attachListeners();
}

function attachListeners(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach( (item) => {
    item.addEventListener('mousedown',colorGrid);
    item.addEventListener('mouseenter',colorGrid);
    item.addEventListener('click',colorGrid);
});
}

createGrid(gridSize); // generates initial grid with the initial grid size (16)

rangeInput.addEventListener('input', (e)=>{
    updateLabel(e);
    createGrid(gridSize);
    
} );



const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach( (item) => {
    item.addEventListener('mousedown',colorGrid);
    item.addEventListener('mouseenter',colorGrid);
    item.addEventListener('click',colorGrid);
});


// set mode to rainbow
rainbowMode.addEventListener('click', () => {
    colorMode = "rainbow";
});

// set mode to static color 
staticMode.addEventListener('click', ()=>{
    colorMode = "static";
});

// automatically set color mode to static when interacting with
// the color selector (when changing the color)
colorSelector.addEventListener('click', () => {
    colorMode = "static";
});

// enable eraser
eraser.addEventListener('click', () => {
    colorMode = "eraser";
});

function colorGrid(e){
    if(colorMode === "static"){
        currentColor = colorSelector.value;
    }

    else if(colorMode === "rainbow"){
        currentColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    }

    else if(colorMode === "eraser"){
        currentColor = 'white';
    }

    if(e.type === "mousedown"){
        mouseDown = true;
        e.preventDefault();
        this.style.backgroundColor = currentColor; 
    }

    else if(e.type === 'mouseenter' && mouseDown ){
        this.style.backgroundColor = currentColor;
    }
    
    else if(e.type === 'click'){
        this.style.backgroundColor = currentColor;
    }
}

document.addEventListener('mouseup', () => {
    mouseDown = false;
});

clearButton.addEventListener('click', () => {
    createGrid(gridSize);
});



