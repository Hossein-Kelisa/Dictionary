// src/pages/main.js (fetching data from API and Error handling)

import {
  API_URL,
  ERROR_MESSAGE,
  DEFAULT_MEANING,
  DEFAULT_SYNONYM,
} from "../constants.js";

export const fetchWordData = async (word) => {
  const loadingElement = document.getElementById("loading");
  const meaningSpan = document.getElementById("meaning");
  const synonymSpan = document.getElementById("synonym");

  try {
    loadingElement.style.display = "block";
    meaningSpan.textContent = "";
    synonymSpan.textContent = "";

    const response = await fetch(`${API_URL}${word}`);
    if (!response.ok) throw new Error(ERROR_MESSAGE);

    const data = await response.json();
    console.log(data);
    loadingElement.style.display = "none";

    meaningSpan.textContent =
      data[0]?.meanings[0]?.definitions[0]?.definition || DEFAULT_MEANING;

    const synonyms = data[0]?.meanings[0]?.synonyms || [];
    console.log(synonyms);
    synonymSpan.textContent =
      synonyms.length > 0 ? synonyms.join(", ") : DEFAULT_SYNONYM;
  } catch (error) {
    loadingElement.style.display = "none";
    meaningSpan.textContent = error.message;
    synonymSpan.textContent = error.message;
  }
};
