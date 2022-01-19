// JS for Etch-A-Sketch

let currentColor = 'black';
let currentMode = 'color'

// Main Container
let mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

// Buttons Container
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer")
buttonContainer.classList.add("buttonContainer")
mainContainer.appendChild(buttonContainer)

// Color Wheel
let colorPicker = document.createElement("input");
colorPicker.classList.add("colorPicker");
colorPicker.setAttribute("id", "colorPicker")
colorPicker.setAttribute("type", "color")
colorPicker.setAttribute("value", "#888888")
buttonContainer.appendChild(colorPicker)

// Color Button
let colorButton = document.createElement("button");
colorButton.classList.add("button","colorButton");
colorButton.setAttribute("id","colorButton");
colorButton.textContent = "Color";
buttonContainer.appendChild(colorButton);

// Clear Grid Button
let clearbutton = document.createElement("button");
clearbutton.classList.add("button", "clearGrid");
clearbutton.setAttribute("id", "clearGrid");
clearbutton.textContent = "Clear Grid";
buttonContainer.appendChild(clearbutton);

// Eraser Button
let eraser = document.createElement("button");
eraser.classList.add("button","eraser");
eraser.setAttribute("id", "eraser")
eraser.textContent = "Eraser";
buttonContainer.appendChild(eraser);


// Grid slider container
let sliderDiv = document.createElement("div");
sliderDiv.classList.add("sliderDiv");
sliderDiv.setAttribute("id", "sliderDiv");
buttonContainer.appendChild(sliderDiv);

// Grid size slider
let slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min", "20");
slider.setAttribute("max", "100");
slider.setAttribute("value", "20");
slider.setAttribute("class", "slider");
slider.setAttribute("id", "myRange");
slider.classList.add("slidecontainer");
sliderDiv.appendChild(slider);
sliderValue = slider.value;

// Create grid container
let gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
gridContainer.setAttribute("id", "gridContainer");
mainContainer.appendChild(gridContainer);

// Grid size text
let sliderSize = document.createElement("p");
sliderSize.classList.add("sliderText");
sliderSize.textContent = `${sliderValue} x ${sliderValue}`
sliderDiv.appendChild(sliderSize);

slider.oninput = function() {
  sliderSize.textContent = `${this.value} x ${this.value}`;
  reloadGrid()
}


// Constant variables
const eraserBtn = document.getElementById('eraser')
const colorBtn = document.getElementById('colorButton')
const clearGridBtn = document.getElementById('clearGrid')
const sliderBtn = document.getElementById('myRange')
const grid = document.getElementById('gridContainer')
const colorWheeel = document.getElementById('colorPicker')


eraserBtn.onclick = () => setCurrentMode('eraser')
colorBtn.onclick = () => setCurrentMode('color')
clearGridBtn.onclick = () => reloadGrid()
colorPicker.onchange = (e) => setCurrentColor(e.target.value)

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentColor(newColor) {
  currentColor = newColor
}

function activateButton(newMode) {
  if (currentMode === 'color') {
    colorButton.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraser.classList.remove('active')
  }

  if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}


let dim = slider.value;
createGridContainer(dim);

// Grid Container dimensions
function createGridContainer(dimensions) {
  gridContainer.style['grid-template-columns'] = `repeat(${dimensions}, 1fr)`;
  gridContainer.style['grid-template-rows'] = `repeat(${dimensions}, 1fr)`;
  createGrid(dimensions);
};

function createGrid(size) {
  for (i = 0; i < (size * size); i++) {
    let createSquare = document.createElement("div");
    createSquare.classList.add(`${i}`, "square");
    createSquare.addEventListener('mouseover', changeColor)
    grid.appendChild(createSquare);
  };
}

const squares = document.querySelectorAll('.square');

function clearGrid() {
  grid.innerHTML = ''
}

function reloadGrid() {
  clearGrid()
  createGridContainer(sliderBtn.value)
}

function changeColor(e) {
  if (currentMode === 'eraser') {
    e.target.style.backgroundColor = 'white'
  } else if (currentMode) {
    e.target.style.backgroundColor = currentColor
  } 
}