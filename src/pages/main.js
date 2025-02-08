// main.js   fetching Api and error handling
import {
  API_URL,
  ERROR_MESSAGE,
  DEFAULT_MEANING,
  DEFAULT_SYNONYM,
} from "../constants.js";

export const fetchWordData = async (word) => {
  try {
    const response = await fetch(`${API_URL}${word}`);
    if (!response.ok) {
      throw new Error(ERROR_MESSAGE);
    }
    const data = await response.json();

    // Select meaningSpan and synonymSpan from DOM
    const meaningSpan = document.getElementById("meaning");
    const synonymSpan = document.getElementById("synonym");

    // Extract meaning
    const firstMeaning =
      data[0]?.meanings[0]?.definitions[0]?.definition || DEFAULT_MEANING; //value of definition or default
    meaningSpan.textContent = firstMeaning;

    // Extract synonyms
    const synonyms = data[0]?.meanings[0]?.synonyms || []; //or empty array
    synonymSpan.textContent =
      synonyms.length > 0 ? synonyms.join(", ") : DEFAULT_SYNONYM; //conditional check for array
  } catch (error) {
    document.getElementById("meaning").textContent = error.message;
    document.getElementById("synonym").textContent = error.message; // Call the error handler function from data.js
  }
};
