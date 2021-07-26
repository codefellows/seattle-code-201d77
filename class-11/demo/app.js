// As a goat farmer I want to figure out the best way to market my goat farm so that I can have lots of poeple come visit to buy goat milk
// do a marketing survey where we ask users to look at a series of goat photos and choose their favorites so that we can see what is most popular
// going to have a series of images
// data associated with each image
// - name/title
// - what goat they picked (listener)
// vote tracker for the goat 
// count the clicks and limit how many before we calculate (in listener stop when we hit the click count)

// objects for goats

// Goat constructor

// the user will see 2 goats - add goats to the page
// clicks on one goat
// event listener will give us info to determine the winning goat
// goat will get a vote if it was voted for
// 2 more images come up
// run out of rounds
// updarte the UL

'use strict';
console.log('hello world');

// ------------------------------- Global Variables ------------------------------//
let clickCounter = 0;
const ulElem = document.getElementById('goat-clicks');
const voteSectionElem = document.getElementById('all_goats');
const leftGoatImgElem = document.getElementById('left_goat_img');
const rightGoatImgElem = document.getElementById('right_goat_img');
const rightGoatH2Elem = document.getElementById('right_goat_h2')
const leftGoatH2Elem = document.getElementById('left_goat_h2')

let leftGoat = null;
let rightGoat = null;

// ------------------------------- Constructor ------------------------------//
function Goat(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;

  Goat.allGoats.push(this);
}

Goat.allGoats = [];

// ------------------------------- Prototype Methods ------------------------------//
// I will tell the function which img elem and h2 elem I should use
Goat.prototype.renderGoat = function (img, h2) {
  img.src = this.imgPath;
  h2.textContent = this.name;
}



// ------------------------------- Standard Global Functions ------------------------------//
function getTwoGoats() {
  // picks 2 goats at random from an array of goats
  let leftIndex = Math.floor(Math.random() * Goat.allGoats.length);
  leftGoat = Goat.allGoats[leftIndex];
  let rightIndex = Math.floor(Math.random() * Goat.allGoats.length);
  rightGoat = Goat.allGoats[rightIndex];
  while (rightGoat === null || rightGoat === leftGoat) {
    rightIndex = Math.floor(Math.random() * Goat.allGoats.length);
    rightGoat = Goat.allGoats[rightIndex];
  }
}

function renderTheGoats(){
  leftGoat.renderGoat(leftGoatImgElem, leftGoatH2Elem);
  rightGoat.renderGoat(rightGoatImgElem, rightGoatH2Elem);
}

function renderResults() {
  ulElem.textContent = '';

  for (let goat of Goat.allGoats) {
    let liElem = document.createElement('li');
    liElem.textContent = `${goat.name}: ${goat.votes}`;
    ulElem.appendChild(liElem)
  }

  // for (let i = 0; i < Goat.allGoats.length; i++) {
  //   let goat = Goat.allGoats[i];
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${goat.name}: ${goat.votes}`;
  //   ulElem.appendChild(liElem)
  // }
}

function handleClick(e) {
  // alert(e.target.id);
  let imageClicked = e.target.id;
  if (imageClicked === 'right_goat_img' || imageClicked === 'left_goat_img') {
    clickCounter++;
    if (imageClicked === 'right_goat_img') {
      rightGoat.votes++;
      console.log(rightGoat)
    }
    if (imageClicked === 'left_goat_img') {
      leftGoat.votes++;
      console.log(leftGoat);
    }
    getTwoGoats();
    renderTheGoats();
  }
  if (clickCounter === 10) {
    // alert('show the goat totals');
    renderResults();
    voteSectionElem.removeEventListener('click', handleClick);
  }

}

// ------------------------------- Listener ------------------------------//

voteSectionElem.addEventListener('click', handleClick);

// ------------------------------- call functions ------------------------------//

new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Away', './images/goat-away.jpg')
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg')
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');

getTwoGoats();
renderTheGoats();