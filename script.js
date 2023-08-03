const container = document.createElement("div");
const resetButton = document.querySelector("button");
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

      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "black";
      });
    }
    container.appendChild(row);
  }
};

resetButton.addEventListener("click", () => {
  let userSize = Number(
    prompt("What dimensions do you want for the new grid?")
  );
  while (userSize > 100) {
    userSize = Number(prompt("What dimensions do you want for the new grid?"));
  }
  createGrid(userSize);
});

createGrid(sizeOfGrid);
