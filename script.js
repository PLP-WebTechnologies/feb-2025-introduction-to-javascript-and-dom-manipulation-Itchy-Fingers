// Function to change text content dynamically
function changeText(newText) {
    document.getElementById('dynamicText').textContent = newText;
}

// Function to modify CSS styles via JavaScript
function changeStyle(elementId, newStyleValue) {
    let element = document.getElementById(elementId);
    element.style[newStyleValue] = 'red'; // Example: changing text color to red
    // You can replace 'red' with any valid CSS color value or other style properties
}

// Function to add an element when a button is clicked
function addButton() {
    let newElement = document.createElement('p');
    newElement.textContent = 'Newly added element';
    document.body.appendChild(newElement);
}

// Function to remove an element when a button is clicked
function removeElement() {
    let elementToRemove = document.getElementById('removeMe');
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

// Event handling for buttons
document.getElementById('changeTextButton').addEventListener('click', function() {
    changeText('New Dynamic Text Content');
});

document.getElementById('changeStyleButton').addEventListener('click', function() {
    changeStyle('styleElement', 'color'); // Trigger style change
});

document.getElementById('addElementButton').addEventListener('click', addButton);

// As we are demonstrating removing, we need an element to remove
let initialElement = document.createElement('p');
initialElement.id = 'removeMe';
initialElement.textContent = 'This will be removed';
document.body.appendChild(initialElement);

document.getElementById('removeElementButton').addEventListener('click', removeElement);
