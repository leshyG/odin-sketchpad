let createGrid = document.querySelector(".btn-grid");
let grid = document.querySelector(".grid");
createGrid.addEventListener("click", () => {
    grid.style = " width: 1500px;height: 725px;display: flex;flex-direction: column";
    for (let i = 1; i <= 16; i++) {
        const column = document.createElement("div");
        column.className = `column`
        column.style = "display: flex; height: 100%";
        for (let j = 1; j <= 16; j++) {
            const row = document.createElement("div");
            row.className = `row`;
            row.style = "flex: 1; border: 1px solid black";
            column.appendChild(row);
        }
        grid.appendChild(column);
        let divGrid = document.querySelectorAll(".row");
        divGrid.forEach((e) => e.addEventListener("mouseover", () => {
            e.style.backgroundColor = "gray";
        }));
    }
});
