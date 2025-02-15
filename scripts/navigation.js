const characters = ["Paul", "David", "Joseph"]; // Character order
let currentCharacterIndex = 0; // Track the current character

function loadNextCharacter() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length; // Move to the next character, loop back to the start
    loadCharacter(characters[currentCharacterIndex]); // Load the next character
}

function loadPreviousCharacter() {
    currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length; // Move to the previous character, loop back to the end
    loadCharacter(characters[currentCharacterIndex]); // Load the previous character
}

function loadCharacter(character) {
    window[`load${character}`](); // Use dynamic function name to call the appropriate load function
}

/*
below function showAllCharactersList() switches the view of the web page by hiding certain sections (like the welcome text, character details, quiz section, and navigation buttons) and showing others (like the character list and headings). This makes it easier for users to navigate through the app and view the list of characters.
*/

function showAllCharactersList() {
    document.getElementById('welcome-text').style.display = 'none';
    document.getElementById('character-list').style.display = 'flex';
    document.getElementById('character-details').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('main-heading').style.display = 'block';
    document.getElementById('sub-heading').style.display = 'block';
    document.getElementById('navigation-buttons').style.display = 'none';
}

function showWelcomePage() {
    document.getElementById('welcome-text').style.display = 'block';
    document.getElementById('character-list').style.display = 'none';
    document.getElementById('character-details').style.display = 'none';
    document.getElementId('quiz-section').style.display = 'none';
    document.getElementById('main-heading').style.display = 'block';
    document.getElementById('sub-heading').style.display = 'block';
    document.getElementById('navigation-buttons').style.display = 'none';
}

function showCharacterDetails(character) {
    document.getElementById('welcome-text').style.display = 'none';
    document.getElementById('character-list').style.display = 'none';
    document.getElementById('character-details').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('main-heading').style.display = 'none';
    document.getElementById('sub-heading').style.display = 'none';
    document.getElementById('navigation-buttons').style.display = 'flex'; // Show the navigation buttons
    
    // Add logic to display character details based on the selected character
    const details = getCharacterDetails(character);
    document.getElementById('character-details').innerHTML = details;

}
