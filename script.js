const colorDiv = document.querySelectorAll('.color');
const pixelTable = document.getElementById('pixel-table');
const btnTableSize = document.getElementById('generate-board');
const inputTableSize = document.getElementById('board-size');
const sectionColorPalette = document.getElementById('color-palette');
const btnClear = document.getElementById('clear-board');
let color = 'black';

function gnrtRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 255);
  return randomNumber;
}

function gnrtRandomColor() {
  const initialColor = `rgb(${gnrtRandomNumber()},${gnrtRandomNumber()},${gnrtRandomNumber()})`;
  return initialColor;
}

for (let index = 1; index < colorDiv.length; index += 1) {
  colorDiv[index].id = gnrtRandomColor();
}

for (let index = 0; index < colorDiv.length; index += 1) {
  colorDiv[index].style.background = colorDiv[index].id;
}

window.onload = function clearSelectionRefresh() {
  for (let index = 0; index < colorDiv.length; index += 1) {
    colorDiv[index].classList.remove('selected');
  }
  colorDiv[0].classList.add('selected');
};

for (let line = 0; line < 5; line += 1) {
  const createLine = document.createElement('tr');
  createLine.classList.add('pixel-line');
  pixelTable.appendChild(createLine);
  for (let column = 0; column < 5; column += 1) {
    const createColumn = document.createElement('td');
    createColumn.classList.add('pixel');
    createLine.appendChild(createColumn);
  }
}

function checkTable(tableSize) {
  let tableSizeCopy = tableSize;
  tableSizeCopy = inputTableSize.value;
  if (tableSizeCopy <= 0) {
    alert('Board inválido!');
  } else if (tableSizeCopy > 50) {
    tableSizeCopy = 50;
  } else if (tableSizeCopy < 5) {
    tableSizeCopy = 5;
  }
  return tableSizeCopy;
}

function generateTable() {
  pixelTable.innerHTML = '';
  const tableSize = checkTable();
  for (let line = 0; line < tableSize; line += 1) {
    const createLine = document.createElement('tr');
    createLine.classList.add('pixel-line');
    pixelTable.appendChild(createLine);
    for (let column = 0; column < tableSize; column += 1) {
      const createColumn = document.createElement('td');
      createColumn.classList.add('pixel');
      createLine.appendChild(createColumn);
    }
  }
}

function selectColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  const objectSelected = event.target;
  objectSelected.classList.add('selected');
  color = objectSelected.style.background;
}

function setColor(event) {
  const pixelSelected = event.target;
  pixelSelected.style.background = color;
}
pixelTable.addEventListener('click', setColor);
btnTableSize.addEventListener('click', generateTable);
sectionColorPalette.addEventListener('click', selectColor);

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.background = 'white';
  }
}
btnClear.addEventListener('click', clearBoard);
