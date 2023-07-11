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

gridSetup(16 * 16);

const gridSquares = document.querySelectorAll(".grid-square")
gridSquares.forEach((grid) => {
    grid.addEventListener('mouseover', (e) => {
        if(window.getComputedStyle(e.target).getPropertyValue("opacity") === "1") {
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
            e.target.style.opacity = "0.1";
        } else {
            if(e.target.style.opacity < "0.9") {
                console.log(e.target.style.opacity);
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            }
        }
    });
});

function clearGrid() {
    gridSquares.forEach((grid) => {
        grid.style.backgroundColor = "whitesmoke";
        grid.style.opacity = "1";
    })
}

const clearBtn = document.querySelector(".clear-grid");
clearBtn.addEventListener("click", clearGrid);

