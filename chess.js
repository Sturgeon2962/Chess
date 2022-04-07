let grid;
let alphabet = "ABCDEFGH";
let colors = ["White", "Black"];

function chess() {
    makeGrid();
    //console.log(grid);
}

function makeGrid() {
    grid = new Array(8);

    for (col = 0; col < grid.length; col++) {
        grid[col] = new Array(8);
    }

    let board = document.getElementById("chessBoard");
    let counter = 0;
    const GRIDSIZE = 50;
    for (col = 0; col < grid.length; col++) {
        for (row = 0; row < grid[col].length; row++) {
            grid[col][row] = document.createElement("div");
            let id = alphabet.charAt(col) + (row + 1);
            grid[col][row].id = id;
            grid[col][row].style.position = "absolute";
            grid[col][row].style.width = GRIDSIZE + "px";
            grid[col][row].style.height = GRIDSIZE + "px";
            grid[col][row].style.top = row * GRIDSIZE + "px";
            grid[col][row].style.left = col * GRIDSIZE + "px";
            grid[col][row].style.backgroundColor = colors[counter % 2];
            counter++;
            grid[col][row].style.borderStyle = "solid";
            board.appendChild(grid[col][row]);
        }
        counter++;
    }
}

function assignpieces() {}
