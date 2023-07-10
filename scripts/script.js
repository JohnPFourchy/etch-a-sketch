const gridContainer = document.querySelector(".grid-container");

function gridSetup(num) {
    const rowNum = Math.sqrt(num);
    // create each row
    for(let i = 0; i < rowNum; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        // create each column in the rows
        for(let j = 0; j < rowNum; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

// initial grid
gridSetup(16 * 16);

const gridSquares = document.querySelectorAll(".grid-square")
gridSquares.forEach((grid) => {
    grid.addEventListener('mouseover', (e) => {
        console.log(e.target.style.backgroundColor);
            e.target.style.backgroundColor = "rgba(0, 0, 0, 1)";        
    })
});

