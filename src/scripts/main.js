'use strict';

// write code here
const inputArray = [...document.querySelectorAll('input')];

for (let i = 0; i < inputArray.length; i++) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = inputArray[i].id;
  newLabel.textContent = inputArray[i].name;
  inputArray[i].placeholder = inputArray[i].name;
  inputArray[i].parentElement.append(newLabel);
}
