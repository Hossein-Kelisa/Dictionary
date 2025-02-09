//  src/app.js (Uses UI module and event handlers)

import { fetchWordData } from "./pages/main.js";
import { createUI } from "./views/ui.js";
import { BODY } from "./constants.js";

// Load the app

document.addEventListener("DOMContentLoaded", () => {
  // Create UI elements
  const { container, input, button } = createUI();
  BODY.appendChild(container);

  // Event listener for button click
  button.addEventListener("click", () => {
    const word = input.value.trim();
    if (word) fetchWordData(word);
  });
  // Event listener for "Enter" key press
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      button.click();
    }
  });
});
// Create background div
const backgroundDiv = document.createElement("div");
backgroundDiv.classList.add("background");
document.body.appendChild(backgroundDiv);
