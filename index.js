"use strict";
const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const divElement = document.createElement("div");
    divElement.classList.add("grid-square");
    container.appendChild(divElement);
  }
}
