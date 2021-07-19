'use strict';
// talk about contextual this tomorrow

'use strict';

// Jose is a volunteer... he has programming knowledge... he can add kitten objects to the js
// name
// age
// location <- seattle
// cats, dogs, kids

const frankie = {
  name: 'frankie',
  age: 0,
  interests: ['fish', 'string', 'lazers'],
  photo: './images/frankie.jpeg',
  getAge: function() {
    this.age = randomAge(3, 12) + ' months'
    console.log(this.age);
  }
}

const jumper = {
  name: 'jumper',
  age: 0,
  interests: ['scratching', 'hissing', 'biting'],
  photo: './images/jumper.jpeg',
  getAge: function() {
    this.age = randomAge(3, 12) + ' months'
    console.log(this.age);
  }
}

const serena = {
  name: 'serena',
  age: 0,
  interests: ['pets', 'scratches', 'treats'],
  photo: './images/serena.jpeg',
  getAge: function() {
    this.age = randomAge(3, 12) + ' months'
    console.log(this.age);
  }
}

// create a function that gives us a random age
function randomAge(a, b) {
  let age = Math.floor(Math.random() * (b - a + 1) + a);
  return age;
}

console.log(frankie);
frankie.getAge();
jumper.getAge();
serena.getAge();

const kittenArray = [frankie, jumper, serena];

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
}

for (let i = 0; i < kittenArray.length; i++) {
  renderKitten(kittenArray[i]);
}









