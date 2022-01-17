// JS for Etch-A-Sketch

// Main Container
let mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

// Button Container
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer")
mainContainer.appendChild(buttonContainer)

// Button
let clearGrid = document.createElement("button");
clearGrid.classList.add("clearGrid");
clearGrid.textContent = "Clear Grid";
buttonContainer.appendChild(clearGrid);

clearGrid.addEventListener('click', () => {
  let userDims = prompt("Please enter your desired grid dimensions (for 8x8, enter 8)");
  if (!(userDims > 100)) {
    document.querySelector('.gridContainer').remove();
    createGridContainer(userDims);
    // alert("Please enter an integer no greater than 100.");
  } else {
    alert("The number is to big. The largest is 100.")
  }
});

// Grid Container
function createGridContainer(dimensions) {
  let colWidPix = 960;
  colWidPix = Math.floor(colWidPix / dimensions);
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("gridContainer");
  gridContainer.style['grid-template-columns'] = `repeat(${dimensions}, ${colWidPix}px)`;
  gridContainer.style['grid-template-rows'] = `repeat(${dimensions}, ${colWidPix}px)`;
  mainContainer.appendChild(gridContainer);
  createGrid(dimensions);
};

let dim = 4;
createGridContainer(dim);

// createGrid(dim);
// 16 divs inside main container

function createGrid(size) {
  for (i = 0; i < (size * size); i++) {
    let divNum = `${i}`;
    let createSquare = document.createElement("div");
    createSquare.classList.add(`${divNum}`, "square");
    createSquare.textContent = `${divNum}`;
    document.querySelector('.gridContainer').appendChild(createSquare);
  };
}
// Button Functionality
