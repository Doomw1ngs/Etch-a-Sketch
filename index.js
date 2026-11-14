"use strict";
const container = document.querySelector(".container");
const resetButton = document.querySelector(".user-button");

function createGrid(num) {
  if (!Number.isFinite(num) || !Number.isInteger(num) || num < 1 || num > 100) {
    return;
  }

  // clear the grid.
  container.replaceChildren();
  // dynamic square resizing.
  const squareSize = (975 - (num - 1)) / num;
  // grid change based of user input.
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const divElement = document.createElement("div");
      divElement.classList.add("grid-square");
      divElement.addEventListener("mouseenter", () => {
        divElement.classList.add("active");
      });
      divElement.style.width = `${squareSize}px`;
      divElement.style.height = `${squareSize}px`;
      container.appendChild(divElement);
    }
  }
}

resetButton.addEventListener("click", () => {
  const userInput = Number(
    prompt("Enter the grid that you want to generate (100 max)"),
  );
  createGrid(userInput);
});

createGrid(16);
