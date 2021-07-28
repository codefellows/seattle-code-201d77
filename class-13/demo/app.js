'use strict';
// get info from the form
// store that info (as an object)
// render the orders to the page

// listener
// submit, to orderForm, write a funtion to handle the submit
// variable for the form

// local storage

// constructor function
// array to store all coffee made

// get a reference to the ul(orderHistory)
// each time a drink is made add it to the ul
// create and append LI with the drink info


// feature v2
// stretch cool regex to mess up names
// when we refresh page or leave and come back
// get stuff from storage
// render all of it by iterate through an array of stored ittems

// function to put stuff in storage

// function to get stuff in storage

// ---------- GV ----------- //
const orderFormElem = document.getElementById('orderForm');
const orderHistoryElem = document.getElementById('orderHistory');

// -------- CF --------- //
function Coffee(name, size, type, milk) {
  this.name = name;
  this.size = size;
  this.type = type;
  this.milk = milk;

  // Coffee.allDrinks.push(this)
}
Coffee.allDrinks = [];

// ------- pm ------- //
Coffee.prototype.renderCoffee = function() {
  // make li
  const liElem = document.createElement('li');
  // add coffee info to the text of the li
  // Sara ordered a 16oz soy milk latte
  liElem.textContent = `${this.name} ordered a ${this.size}oz ${this.milk} milk ${this.type}`;
  // append the li
  orderHistoryElem.appendChild(liElem);
}

// ------- global funct ------ ///

function _makeTheDrink(name, size, type, milk) {
  let newDrink = new Coffee(name, size, type, milk);
  Coffee.allDrinks.push(newDrink);
  newDrink.renderCoffee();
}

function getCoffeeFromStorage() {
  let stuffFromStorage = localStorage.getItem('coffee');
  if (stuffFromStorage) {
    let parsedStuff = JSON.parse(stuffFromStorage);
    console.log(parsedStuff);
    // turn all the objects back into coffee??
    // parsedStuff is currently an array of plain old js objects that need to become coffee instances
    for (let drink of parsedStuff) {
      let newCoffee = new Coffee(drink.name, drink.size, drink.type, drink.milk);
      Coffee.allDrinks.push(newCoffee);
      newCoffee.renderCoffee();
    }

    // for (let i = 0; i < parsedStuff.length; i++) {
    //   let drink = parsedStuff[i];
    //   _makeTheDrink(drink.name, drink.size, drink.type, drink.milk);
    // }
  }
}


function putCoffeeInStorage() {
  // prepare the data to be stored
  console.log(Coffee.allDrinks)
  let stringifiedArray = JSON.stringify(Coffee.allDrinks);
  // console.log(stringifiedArray);
  // store the data in storage with the key coffee
  localStorage.setItem('coffee', stringifiedArray);
}

function handleSubmit(e) {
  e.preventDefault();
  // get info from the target
  const name = e.target.name.value;
  // name
  const size = e.target.size.value;
  // size
  const type = e.target.drinkType.value;
  // drinkType
  const milk = e.target.milk.value
  // milk
  _makeTheDrink(name, size, type, milk);
  putCoffeeInStorage();
}


// ------ listeners ------ //
orderFormElem.addEventListener('submit', handleSubmit)


// ------- call functions ------ //
getCoffeeFromStorage();