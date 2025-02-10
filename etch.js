//Initial grid creation
let container = document.querySelector("#container");

function gridSize(size) {
    let newSize = 480 / size;
    
    for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement("div");
        grid.classList.add("square");
        grid.style.width = `${newSize}px`;
        grid.style.height = `${newSize}px`;
        container.appendChild(grid);
    };
}

//Select all grids and add color changing properties to them
function changeGridColor() {
    container.addEventListener("mouseover", (event) => {
        let target = event.target;
        if (target.matches(".square")) {
            target.style.backgroundColor = "grey";
        }
    })
};

gridSize(16);
changeGridColor();

//Allow grid resizing through a button
const resizeButton = document.querySelector("button");

resizeButton.addEventListener("click", () => {
    let resizeValue = +prompt("Enter the number of squares per side for the new grid (1-100).");
    
    if (resizeValue === null || isNaN(resizeValue) || resizeValue < 1 || resizeValue > 100 || resizeValue === "" || !Number.isInteger(resizeValue)) {
        alert("Please enter a valid value.");
        return;
    }

    container.innerHTML = "";

    gridSize(resizeValue);
    changeGridColor();
});

