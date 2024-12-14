let container = document.querySelector(".container");

function createGrid(gridSize) {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.style.border = "1px solid black";
        row.style.display = "flex";
        let minHeight = 100 / gridSize;
        row.style.minHeight = minHeight + "vh";
        row.setAttribute("class", "row");
        for (let j = 0; j < gridSize; j++){
            let column = document.createElement("div");
            column.style.border = "1px solid red";
            column.style.flex = "1";
            column.setAttribute("class", "column")
            row.appendChild(column);            
        }
        container.appendChild(row);
    }
    changeColor();
}

createGrid(16);

function changeColor() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
    let squares = row.childNodes;
    squares.forEach((square) => {
        square.addEventListener("mouseenter", (e) => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        })
    })
})  
}


let sizeBtn = document.querySelector("button");

sizeBtn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Input a grid size:"))
    createGrid(gridSize);
})