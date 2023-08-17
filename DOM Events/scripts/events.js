// option 1 - directly set on the HTML element
// option 2
function makeBlue() {
  document.body.style.backgroundColor = 'powderblue';
}

// option 3
const lightgreenButton = document.getElementById('make-lightgreen');
lightgreenButton.onclick = makeLightgreen;

function makeLightgreen() {
  document.body.style.backgroundColor = 'lightgreen';
}

// option 4 (useable)
const lavenderButton = document.querySelector('#make-lavender');
lavenderButton.onclick = function () {
  document.body.style.backgroundColor = 'lavender';
};

// option 5
const peachButton = document.querySelector('#make-peachpuff');
console.log(peachButton);
peachButton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'peachpuff';
});

// option 6 (important and frequently used)
document.getElementById('make-mintcream').addEventListener('click', function () {
  document.body.style.backgroundColor = 'mintcream';
});