'use strict';

const onButton = document.getElementById('on');
const offButton = document.getElementById('off');
const catContainer = document.getElementById('cat-container');
const mouseImage = document.getElementById('mouseImage');
const yarnImage = document.getElementById('yarnImage')
const title = document.getElementById('title')


function handleOnClick(e) {
  catContainer.setAttribute('class', 'on');
  mouseImage.setAttribute('class', 'on');
  yarnImage.setAttribute('class', 'on');
  title.setAttribute('class', 'on');
}

function handleOffClick(e) {
  catContainer.setAttribute('class', 'off');
  mouseImage.setAttribute('class', 'off');
  yarnImage.setAttribute('class', 'off');
  title.setAttribute('class', 'off');
}

onButton.addEventListener('click', handleOnClick);
offButton.addEventListener('click', handleOffClick);