let color = "black";
let click = false;

const gridSlider = document.getElementById("gridSlider");
const printSize = document.getElementById("printSize");

gridSlider.onchange = (e) => updateSizeValue(e.target.value);

const createBoard = (size) => {
  let board = document.getElementById("board");
  let squareDivs = board.querySelectorAll("div");
  squareDivs.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let squaredSize = Math.pow(size, 2);

  for (let i = 0; i < squaredSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mousedown", colorSquare);
    square.addEventListener("mouseover", colorSquareTwo);
    square.style.backgroundColor = "white";

    board.insertAdjacentElement("beforeend", square);
  }
};

createBoard(16);

function changeSize(value) {
  if (value >= 1 && value <= 128) {
    createBoard(value);
  } else {
    console.log("x");
  }
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    this.style.backgroundColor = color;
  }
}

function colorSquareTwo() {
  mouseWatch();
  if (click) {
    if (color === "random") {
      this.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}

function updateSizeValue(value) {
  printSize.innerHTML = `${value} x ${value}`;
}

function boardReset() {
  let board = document.getElementById("board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function mouseWatch() {
  let boardClick = document.getElementById("board");
  boardClick.addEventListener("mousedown", () => {
    click = true;
  });
  boardClick.addEventListener("mouseup", () => {
    click = false;
  });
  boardClick.addEventListener("mouseover", () => {
    console.log("clicked");
  });
}

document.body.onmousedown = () => (click = true);
document.body.onmouseup = () => (click = false);
