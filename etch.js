let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.classList.add("square");
    grid.classList.add("track");
    container.appendChild(grid);
};

let p = document.createElement("p");
container.appendChild(p);

let grids = container.querySelectorAll(".track");

grids.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
        p.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;    
});
});
