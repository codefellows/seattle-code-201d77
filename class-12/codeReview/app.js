'use strict';

// constructor for products


// --------------------------- global variables -------------------------- //
// dom references
const leftImgElem = document.getElementById('left_product_img')
const leftH2Elem = document.getElementById('left_product_h2')
const centerImgElem = document.getElementById('center_product_img')
const centerH2Elem = document.getElementById('center_product_h2')
const rightImgElem = document.getElementById('right_product_img')
const rightH2Elem = document.getElementById('right_product_h2')
const voteContainerElem = document.getElementById('all-products');
const resultsUlElem = document.getElementById('product-clicks');

let currentLeft = null;
let currentRight = null;
let currentCenter = null;

let rounds = 20;


// --------------------------- constructor function -------------------------- //
function Product(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.clicks = 0;
  this.views = 0;
  // technically this function should not do external processes it is made to define features of a 'product'
}

Product.allProducts = [];
// --------------------------- prototype methods ---------------------------//

// renders a single image/name
Product.prototype.renderProduct = function(img, h2) {
  img.src = this.imgPath;
  img.alt = this.name;
  h2.textContent = this.name;
  this.views++;
}


// ---------------------------- global functions -----------------------//

// picks three unique imgages no repeats
function picksThreeProducts() {
  const doNotUse = [currentRight, currentLeft, currentCenter];
  while (doNotUse.includes(currentLeft)) {
    let leftIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentLeft = Product.allProducts[leftIndex];
  }
  doNotUse.push(currentLeft);
  
  while (doNotUse.includes(currentRight)) {
    let rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentRight = Product.allProducts[rightIndex];
  }
  doNotUse.push(currentRight);
  
  while (doNotUse.includes(currentCenter)) {
    let centerIndex = Math.floor(Math.random() * Product.allProducts.length);
    currentCenter = Product.allProducts[centerIndex];
  }
  doNotUse.push(currentCenter);
  console.log(doNotUse);
  
}


// render three images
function renderThreeProducts() {
  currentCenter.renderProduct(centerImgElem, centerH2Elem);
  currentLeft.renderProduct(leftImgElem, leftH2Elem);
  currentRight.renderProduct(rightImgElem, rightH2Elem);
}

// renders results

// click handler
function handleClick(e) {
  const target = e.target.id;
  if (target === 'left_product_img' || target === 'right_product_img' || target === 'center_product_img') {
    // update vote rounds
    rounds--;
    // determine their choice and update the votes on that object
    if (target === 'left_product_img') {
      currentLeft.clicks++;
    }
    if (target === 'right_product_img') {
      currentRight.clicks++;
    }
    if (target === 'center_product_img') {
      currentCenter.clicks++;
    }
    // choose three new images
    picksThreeProducts();
    // render three images
    renderThreeProducts();
  }
  if (rounds === 0) {
    voteContainerElem.removeEventListener('click', handleClick);
    alert(currentCenter.clicks);
  }
}

// --------------------------- Listener ------------------------//

// listener on the container for pictures
voteContainerElem.addEventListener('click', handleClick);

// --------------------------- call functions ---------------------//

Product.allProducts.push(new Product('Bag', './img/bag.jpg'));
Product.allProducts.push(new Product('Banana', './img/banana.jpg'));
Product.allProducts.push(new Product('Bathroom', './img/bathroom.jpg'));
Product.allProducts.push(new Product('Boots', './img/boots.jpg'));
Product.allProducts.push(new Product('Breakfast', './img/breakfast.jpg'));
Product.allProducts.push(new Product('Bubblegum', './img/bubblegum.jpg'));
Product.allProducts.push(new Product('Chair', './img/chair.jpg'));
Product.allProducts.push(new Product('Cthulhu', './img/cthulhu.jpg'));
Product.allProducts.push(new Product('Dog-Duck', './img/dog-duck.jpg'));
Product.allProducts.push(new Product('Dragon', './img/dragon.jpg'));
Product.allProducts.push(new Product('Pen', './img/pen.jpg'));
Product.allProducts.push(new Product('Pet-Sweep', './img/pet-sweep.jpg'));
Product.allProducts.push(new Product('Scissors', './img/scissors.jpg'));
Product.allProducts.push(new Product('Shark', './img/shark.jpg'));
Product.allProducts.push(new Product('Sweep', './img/sweep.png'));
Product.allProducts.push(new Product('Tauntaun', './img/tauntaun.jpg'));
Product.allProducts.push(new Product('Unicorn', './img/unicorn.jpg'));
Product.allProducts.push(new Product('Water Can', './img/water-can.jpg'));
Product.allProducts.push(new Product('Wine Glass', './img/wine-glass.jpg'));

picksThreeProducts();
renderThreeProducts();