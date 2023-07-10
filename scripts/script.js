const gridContainer = document.querySelector(".grid-container");

function setup(num) {
    const rowNum = Math.sqrt(num);
    for(let i = 0; i < rowNum; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        // second for
        for(let j = 0; j < rowNum; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
}

setup(16 * 16);