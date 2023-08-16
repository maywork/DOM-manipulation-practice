const sections = document.querySelectorAll('section');
for (const section of sections) {
  section.style.border = '20px solid steelblue';
  section.style.borderRadius = '8px';
  section.style.paddingLeft = '20px';
  section.style.marginBottom = '5px';
  section.style.backgroundColor = 'lightgray';

}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'bisque';

// const placesContainer = document.getElementById('places-container');
// placesContainer.classList.add('lst-style');

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('txt-color');
placesContainer.classList.add('large-txt');

// document.getElementById('balance').innerText = "";

// adding a list item with DOM
const placesUL = document.querySelector('#places-container ul');

// create and set content of the list item
const newLI = document.createElement('li');
newLI.innerText = "New List Item";

// add the list item to the unordered list
placesUL.appendChild(newLI);