let cellCount = 16;
let cell = document.createElement("div");
cell.classList.add("cell");

let grid = document.querySelector("#grid");


for (let i = 0; i < cellCount**2; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}

