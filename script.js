const rangeLabel = document.querySelector('.range-label'); //for the label element 
const rangeInput = document.querySelector("#gridSize");   // the range input that used for selecting the grid size
const gridContainer = document.querySelector("#grid-container"); //the div in which grid items are created

let gridSize = rangeInput.value; //initial size of the grid (16)
rangeLabel.textContent = `${rangeInput.value}x${rangeInput.value}`; // adds the initial value to the label (16)


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
}

createGrid(gridSize); // generates initial grid with the initial grid size (16)

rangeInput.addEventListener('input', (e)=>{
    updateLabel(e);
    createGrid(gridSize);
} );
// console.log('initial size = '+gridSize+'x'+gridSize);

