'use strict';

console.log('hello world!');

// ask a few questions and use if statements (conditional statements) or switch statements to reply with a unique alert;

// 1 == '1'; - truthy same value but not same type
// 1 === '1'  - falsey not the same type even though the value is the same
// ask a question
let disneylandOrig = prompt('Have you ever been to disneyland?');
console.log(disneylandOrig);
// problem!!! I want to allow different letter cases and maybe I want to allow y or n

let disneyland = disneylandOrig.toLowerCase();
// we try not to change the users original input 
console.log(disneyland);
// if the person says yes I want to congratulate them, if they say no I will say sorry, if they say anything else I will say I didn't get that, hope you get to go soon
if (disneyland === 'yes' || disneyland === 'y') {
  alert('congratulations it really is the happiest place on earth!');
} else if (disneyland === 'no' || disneyland === 'n') {
  alert('bummer, you should go');
} else {
  alert('I didn\'t get that, but I hope you go soon');
}

// lets make a switch statement for lots of options
let funLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was disneyland when you went?');

console.log(typeof funLevel);

let funLevelNumber = parseInt(funLevel);
// make default if they don't give us a number
// let funLevelNumber = Number(funLevel);
// isNaN()

// debugger;
switch (funLevelNumber) {
  case 1:
    alert('you should try again');
    break; // break out of the block here!
  case 2:
    alert('Should not have had the Turkey Leg!');
    break;
  case 3:
    alert('That is awesome, we should go together');
    break;
  default:
    alert('Let me help you plan your next trip');
}

