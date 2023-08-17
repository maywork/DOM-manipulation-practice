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

// option 4
const lavenderButton = document.querySelector('#make-lavender');
lavenderButton.onclick = function () {
  document.body.style.backgroundColor = 'lavender';
};