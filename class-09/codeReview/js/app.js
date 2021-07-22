'use strict';

console.log('I am here');

// Replace all of your object literals for the salmon cookie stand with a single constructor function

// constructor function 
//build a single table of data
//Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
// Each cookie stand location should have a separate render() method
// The header row and footer row are each created in their own stand-alone function

// ------------------------------ Global Variables ----------------------------//
// I need to get a refernce to where on the page I am putting stuff
const tableElem = document.getElementById('sales');
// for hours of opperation
const hoursOfOpperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// -------------------------------- Constructor ------------------------------//
// minCust, maxCust, avgCookiePerSale, locationName
function Store(minCust, maxCust, avgCookiePerSale, name) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.salesHourly = [];

  Store.allStores.push(this)
}


// -------------------------------- constructor related stuff -------------------------//
Store.allStores = [];
// getting random customer
Store.prototype.randomCustInRange = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}
// calculates sale per hour based on rand cust
Store.prototype.calculateSalesPerHour = function() {
  for (let i = 0; i < hoursOfOpperation.length; i++) {
    const thisHoursSale = Math.ceil(this.randomCustInRange() * this.avgCookiePerSale);
    this.salesHourly.push(thisHoursSale);
  }
}
// seattle.calculateSalesPerHour()
// seattle.randomCustIn...()
// seattle.avgCookiePerSale
// prototype method for render()
// nameTagWearers.stuffTheyCanDo.hi = function() {
//   this.nameTagWearers: 'say hi'
// }
// nameTagWearers1 = stefanie
// nameTagWearers2 = raj
// raj.hi

// prototype method for render()
// create a row, insert a th with the location name insert salesHourly array values as td's, insert a th with grand total
Store.prototype.renderStore = function(bodyElem) {
  let grandTotal = 0;
  const rowElement = document.createElement('tr');
  bodyElem.appendChild(rowElement);
  const locationTHElem = document.createElement('th');
  locationTHElem.textContent = this.name;
  rowElement.appendChild(locationTHElem);
  for (let i = 0; i < this.salesHourly.length; i++) {
    const hourlyTotal = this.salesHourly[i]
    const tdElem = document.createElement('td');
    tdElem.textContent = hourlyTotal;
    grandTotal += hourlyTotal;
    rowElement.appendChild(tdElem);
  }
  const grandTotalTHElem = document.createElement('th');
  grandTotalTHElem.textContent = grandTotal;
  rowElement.appendChild(grandTotalTHElem);
}

// -------------------------------- global functions ----------------------------//
// makes elements and adds them to the dom
function makeElement(tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;
}


// renders header
function renderHeader() {
  const headerElem = makeElement('thead', tableElem, null);
  const rowElem = makeElement('tr', headerElem, null);
  makeElement('td', rowElem, null);
  for (let i = 0; i < hoursOfOpperation.length; i++) {
    makeElement('th', rowElem, hoursOfOpperation[i]);
  }
}

// loops through and renders all locations - maybe make a tbody??
function rendersAllStores() {
  // create the tbody and append it to the table
  const bodyElem = makeElement('tbody', tableElem, null);
  for (let i = 0; i < Store.allStores.length; i++) {
    let currentStore = Store.allStores[i];
    currentStore.calculateSalesPerHour();
    currentStore.renderStore(bodyElem);
  }
}

// renders footer
function renderFooter() {
  // make a tfoot element - give it a variable to refer to it by
  // append the tfoot to the table
  const tfootElem = makeElement('tfoot', tableElem, null);
  // make a row - append the row to the tfoot
  const rowElem = makeElement('tr', tfootElem, null);
  // houly total - hourly total varibale
  let hourlyTotal = 0;
  // table grand total
  let grandTotal = 0;
  makeElement('th', rowElem, 'Hourly Totals')
  // first access the hour
  for (let i = 0; i < hoursOfOpperation.length; i++){
    // then look at the store (each store) at that hour
    for (let j = 0; j < Store.allStores.length; j++) {
      // get the store at the hours value and add to houly total
      let storesSalesAtHour = Store.allStores[j].salesHourly[i];
      hourlyTotal += storesSalesAtHour;
    }
    // add cell to row
    makeElement('th', rowElem, hourlyTotal);
    // add hourly total to grand total
    grandTotal += hourlyTotal;
    // we will have to reset the hourly total once we are done adding the data to the table
    hourlyTotal = 0;
  }
  // add grand total to my footer as the last cell
  makeElement('th', rowElem, grandTotal);

}



// ------------------------------ call functions ----------------------------//

const seattle = new Store(23, 65, 6.3, 'Seattle');
const tokyo = new Store(3, 24, 1.2, 'Tokyo');
const lima = new Store(2, 16, 4.6, 'Lima');

renderHeader();
rendersAllStores();
renderFooter();