const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const sizeOfGrid = 16;

const createGrid = (gridsNumber) => {
  for (let i = 0; i < gridsNumber; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridsNumber; j++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
};

createGrid(sizeOfGrid);
