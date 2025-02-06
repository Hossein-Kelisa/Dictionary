import {
    BODY,
    TITLE_TEXT,
    INPUT_PLACEHOLDER,
    BUTTON_TEXT,
    MEANING_LABEL_TEXT,
    SYNONYM_LABEL_TEXT
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
