let container = document.querySelector(".container");
let gridBtn = document.createElement("button");
gridBtn.classList.add("gridBtn");
gridBtn.textContent = "New Grid";
document.body.insertBefore(gridBtn, container);

const createGrid = (size) => {
  container.innerHTML = "";
  if (size < 100) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.style.width = `${960 / size}` + "px";
        square.style.height = `${960 / size}` + "px";

        square.opacity = 0.1;

        square.addEventListener("mouseenter", () => {
          if (square.opacity < 1) {
            square.opacity = Math.min(square.opacity + 0.1, 1);
            square.style.backgroundColor = `rgba(0, 0, 0, ${square.opacity})`;
          }
        });
      }
    }
  } else {
    newGrid();
  }
};

const newGrid = () => {
  let size = prompt("How many boxes per side?");
  createGrid(size);
};
gridBtn.addEventListener("click", newGrid);
