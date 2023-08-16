// where to add
const placesList = document.getElementById('places-list');
// whats to add
const li = document.createElement('li');
li.innerText = 'Pahartoli';
// append the element
placesList.appendChild(li);

// adding whole sections
const mainContainer = document.getElementById('main-container');

// content
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Favorite Food List';
section.appendChild(h1);

// content list
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Pizza';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Burger';
ul.appendChild(li3);


mainContainer.appendChild(section);
section.appendChild(ul);

// adding another section
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>Favorite Dress List</h1>
    <ul>
      <li>Sun dress</li>
      <li>Crop top</li>
      <li>Mom jeans</li>
    </ul>
    `

mainContainer.appendChild(sectionDress);