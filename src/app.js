import {
    BODY,
    TITLE_TEXT,
    INPUT_PLACEHOLDER,
    BUTTON_TEXT,
    MEANING_LABEL_TEXT,
    SYNONYM_LABEL_TEXT,
    DEFAULT_MEANING,
    DEFAULT_SYNONYM
} from './constants.js';
document.addEventListener("DOMContentLoaded", () => { 
    // Create title
    const title = document.createElement("h1");
    title.textContent = TITLE_TEXT;
    BODY.appendChild(title);

    // Create container
    const container = document.createElement("div");
    container.classList.add("container"); 

    // Create input box
    const box = document.createElement("div"); 
    box.classList.add("box");  
    const input = document.createElement("input"); 
    input.type = "text";  
    input.placeholder = INPUT_PLACEHOLDER; 
    const button = document.createElement("button");
    button.textContent = BUTTON_TEXT; 

    box.appendChild(input); 
    box.appendChild(button); 
    container.appendChild(box); 

    // Create results section
    const results = document.createElement("div");
    results.classList.add("results");

    const meaningLine = document.createElement("div");
    const meaningLabel = document.createElement("label");
    meaningLabel.textContent = MEANING_LABEL_TEXT;
    var meaningSpan = document.createElement("span");
    meaningSpan.id = "meaning";
    meaningLine.appendChild(meaningLabel);
    meaningLine.appendChild(meaningSpan);

    const synonymLine = document.createElement("div");
    const synonymLabel = document.createElement("label");
    synonymLabel.textContent = SYNONYM_LABEL_TEXT;
    var synonymSpan = document.createElement("span");
    synonymSpan.id = "synonym";
    synonymLine.appendChild(synonymLabel);
    synonymLine.appendChild(synonymSpan);

    results.appendChild(meaningLine);
    results.appendChild(synonymLine);
    container.appendChild(results);
    BODY.appendChild(container)
});

// Create background div
const backgroundDiv = document.createElement('div');
backgroundDiv.classList.add('background');
document.body.appendChild(backgroundDiv);

// Function to fetch word data from API
const fetchWordData = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error("Hossein's Dictionary couldn't find the word.");
        }
        const data = await response.json();

        // Select meaningSpan and synonymSpan from DOM
        const meaningSpan = document.getElementById("meaning");
        const synonymSpan = document.getElementById("synonym");

        // Extract meaning
        const firstMeaning = data[0]?.meanings[0]?.definitions[0]?.definition || DEFAULT_MEANING;  //value of definition or default
        meaningSpan.textContent = firstMeaning;  
           

        // Extract synonyms
        const synonyms = data[0]?.meanings[0]?.synonyms || [];    //or empty array
        synonymSpan.textContent = synonyms.length > 0 ? synonyms.join(", ") : DEFAULT_SYNONYM;  //conditional check for array
            } catch (error) {
        console.error(error.message);
        document.getElementById("meaning").textContent = error.message;   //what shows in the page, (default or message)
        document.getElementById("synonym").textContent = error.message;
    }
};