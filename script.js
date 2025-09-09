const rangeLabel = document.querySelector('.range-label');
const rangeInput = document.querySelector("#gridSize");

rangeLabel.textContent = `${rangeInput.value}x${rangeInput.value}`;
rangeInput.addEventListener('input', (e) => {
    rangeLabel.textContent = `${e.target.value}x${e.target.value}`;
})