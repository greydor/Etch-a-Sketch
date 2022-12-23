let cellCount = 50;
let size = 1000;
let colorMode = "black"

function createGrid (size, cellCount) {
    let grid = document.querySelector("#grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    grid.style.width = `${size}px`;
    grid.style.height = `${size}px`;
    grid.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
    for (let i = 0; i < cellCount**2; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
        cell.addEventListener ("mouseenter", () => {
            if (colorMode === "black") {
                cell.style.backgroundColor = "black";
            }
            else if (colorMode === "random") {
                cell.style.backgroundColor = generateRandomColor();
            }          
        })
    }
    return grid;
}

let grid = createGrid(size, cellCount);

let setCellCount = document.querySelector("#set-cell-count");
setCellCount.addEventListener("click", () => {
    cellCountTemp = prompt("Select the number of cells per side", 50)
    if (cellCountTemp > 100) {
        alert("Select an number less than 101")
    }
    else {
        cellCount = cellCountTemp;
        let grid = createGrid(size, cellCount);
    }
})

let setGridSize = document.querySelector("#set-grid-size");
setGridSize.addEventListener("click", () => {
    sizeTemp = prompt("Select the number of pixels per side", 1000)
    if (sizeTemp < 200) {
        alert("Select an number greater than 199")
    }
    else {
        size = sizeTemp;
        let grid = createGrid(size, cellCount);        
    }

})

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    let grid = createGrid(size, cellCount);
})

let modeSelect = document.querySelector("#mode-select");
modeSelect.addEventListener("change", (event) => {
    colorMode = event.target.value;
})

function generateRandomColor() {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
}