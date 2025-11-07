let createGrid = document.querySelector(".btn-grid");
let grid = document.querySelector(".grid");
createGrid.addEventListener("click", () => {
    let size;
    while (typeof (size) !== "number" || (0 > size || size > 100)) {
        size = parseInt(prompt("¿Cuanto tamaño del sketch? (max: 100)"));
    }
    if (grid.hasChildNodes()) {
        grid.textContent = "";
    }
    grid.style = " width: 1500px;height: 725px;display: flex;flex-direction: column";
    for (let i = 1; i <= size; i++) {
        const column = document.createElement("div");
        column.className = `column`
        column.style = "display: flex; height: 100%";
        for (let j = 1; j <= size; j++) {
            const row = document.createElement("div");
            row.className = `row`;
            row.style = "flex: 1; border: 1px solid black";
            column.appendChild(row);
        }
        grid.appendChild(column);
        let divGrid = document.querySelectorAll(".row");
        let ran1 = Math.floor((Math.random() * 255) + 1);
        let ran2 = Math.floor((Math.random() * 255) + 1);
        let ran3 = Math.floor((Math.random() * 255) + 1);
        divGrid.forEach((e) => e.addEventListener("mouseover", () => {
            e.style.backgroundColor = `rgb(${ran1},${ran2},${ran3})`;
        }));
    }
});
