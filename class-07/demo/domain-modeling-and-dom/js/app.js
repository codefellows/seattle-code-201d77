'use strict';
// talk about contextual this tomorrow

'use strict';

// Jose is a volunteer... he has programming knowledge... he can add kitten objects to the js
// This has become very time consuming! There are so many kittens, also Jose is not the best typer and sometimes hee forgets what properties kittens have to have
// name
// age
// location <- seattle
// cats, dogs, kids


function Kitten(name, interests, photo, isGoodWithCats, isGoodWithDogs, isGoodWithKids) {
  this.name = name;
  this.interests = interests;
  this.photo = photo;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.age = 0;

  Kitten.allKits.push(this);
}

Kitten.kittenCaboodle = [];

Kitten.prototype.getAge = function() {
  this.age = `${randomAge(3,12)} months`;
  console.log(this.age)
}



// Kitten.kittenCaboodle.push(new Kitten('Frankie', ['fish', 'string', 'lazers'], './images/frankie.jpeg', true, false, true));
const frankie = new Kitten('Frankie', ['fish', 'string', 'lazers'], './images/frankie.jpeg', true, false, true);
const jumper = new Kitten('Jumper', ['scratching', 'hissing', 'biting'], './images/jumper.jpeg', false, false,true);
const serena = new Kitten('Serena', ['pets', 'scratches', 'treats'], './images/serena.jpeg', true, true, true);

// function makeAKitten(name, interests, photo, isGoodWithCats, isGoodWithDogs, isGoodWithKids) {
//   const kitten = new Kitten(name, interests, photo, isGoodWithCats, isGoodWithDogs, isGoodWithKids);
//   Kitten.kittenCaboodle.push(kitten);
//   // every time I make a kitten I want to add it to a database
// }
// makeAKitten('Frankie', ['fish', 'string', 'lazers'], './images/frankie.jpeg', true, false, true)

// const frankie = {
//   name: 'frankie',
//   age: 0,
//   interests: ['fish', 'string', 'lazers'],
//   photo: './images/frankie.jpeg',
//   getAge: function() {
//     this.age = randomAge(3, 12) + ' months'
//     console.log(this.age);
//   }
// }

// const jumper = {
//   name: 'jumper',
//   age: 0,
//   interests: ['scratching', 'hissing', 'biting'],
//   photo: './images/jumper.jpeg',
//   getAge: function() {
//     this.age = randomAge(3, 12) + ' months'
//     console.log(this.age);
//   }
// }

// const serena = {
//   name: 'serena',
//   age: 0,
//   interests: ['pets', 'scratches', 'treats'],
//   photo: './images/serena.jpeg',
//   getAge: function() {
//     this.age = randomAge(3, 12) + ' months'
//     console.log(this.age);
//   }
// }

// create a function that gives us a random age
function randomAge(a, b) {
  let age = Math.floor(Math.random() * (b - a + 1) + a);
  return age;
}



// put frankie on the page!!
// find the place on the page we want to add frankie
// kittenProfiles - lets get a refernce
const profileDivElem = document.getElementById('kittenProfiles');

// create some elements to put content in
// <!-- <article>
//           <h2></h2>
//           <p></p>
//           <ul>
//             <li></li>
//           </ul>
//           <img>
//         </article> -->
// name
//age
//interests
function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}


function renderKitten(kitten) {
  let articleElem = document.createElement('article');
  // parentElem.appendChild(childElem)
  profileDivElem.appendChild(articleElem);
  let imgElem = document.createElement('img');
  imgElem.src = kitten.photo;
  articleElem.appendChild(imgElem);
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = kitten.name;
  articleElem.appendChild(h2Elem);
  let pElem = document.createElement('p');
  pElem.textContent = `age: ${kitten.age}`;
  articleElem.appendChild(pElem);
  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for (let i = 0; i < kitten.interests.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = kitten.interests[i];
    ulElem.appendChild(liElem)
  }
  const tableElem = makeElement('table', articleElem, null);
  const rowElem = makeElement('tr', tableElem, null);
  makeElement('th', rowElem, 'Good with Cats');
  makeElement('th', rowElem, 'Good with Dogs');
  makeElement('th', rowElem, 'Good with Kids');
  const row2Elem = makeElement('tr', tableElem, null);
  makeElement('td', row2Elem, kitten.isGoodWithCats);
  makeElement('td', row2Elem, kitten.isGoodWithDogs);
  makeElement('td', row2Elem, kitten.isGoodWithKids);
}

for (let i = 0; i < Kitten.kittenCaboodle.length; i++) {
  Kitten.kittenCaboodle[i].getAge();
  renderKitten(Kitten.kittenCaboodle[i]);
}









