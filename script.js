let container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 16; i++){
        let row = document.createElement("div");
        row.style.border = "1px solid black";
        row.style.display = "flex";
        row.setAttribute("class", "row");
        for (let j = 0; j < 16; j++){
            let column = document.createElement("div");
            column.style.border = "1px solid red";
            column.style.flex = "1";
            column.setAttribute("class", "column")
            row.appendChild(column);            
        }
        container.appendChild(row);
    }
}

createGrid();

let rows = document.querySelectorAll(".row");
rows.forEach((row) => {
    let squares = row.childNodes;
    squares.forEach((square) => {
        square.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
            console.log(e.target);
            
        })
    })
})






// squares.forEach((square) => {
//     square.addEventListener("mouseenter", (e) => {
//         e.target.style.backgroundColor = "black";
//     })
// })