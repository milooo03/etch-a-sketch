let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.classList.add("square");
    container.appendChild(grid);
};

let p = document.createElement("p");
container.appendChild(p);

let grids = container.querySelectorAll(".square");

grids.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
});
});

const resizeButton = document.querySelector("button");
let resizeValue;
let newSize;

resizeButton.addEventListener("click", () => {
    resizeValue = +prompt("Enter the number of squares per side for the new grid (1-100).");
    
    if (resizeValue === null || isNaN(resizeValue) || resizeValue < 1 || resizeValue > 100 || resizeValue === "" || !Number.isInteger(resizeValue)) {
        alert("Please enter a valid value.");
        return;
    }
    
    newSize = 480 / resizeValue;

    grids.forEach((item) => {
        item.remove();
    });

    for (let i = 0; i < (resizeValue * resizeValue); i++) {
        let grid = document.createElement("div");
        grid.classList.add("square");
        grid.style.width = `${newSize}px`;
        grid.style.height = `${newSize}px`;
        container.appendChild(grid);
    };

    grids = container.querySelectorAll(".square");

    grids.forEach((item) => {
        item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "grey";
    });
    });
});

