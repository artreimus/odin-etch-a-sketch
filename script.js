let color = "black";

const createBoard = (size) => {
  let board = document.getElementById("board");
  let squareDivs = board.querySelectorAll("div");
  squareDivs.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let squaredSize = Math.pow(size, 2);

  for (let i = 0; i < squaredSize; i++) {
    square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    square.style.border = "2px solid black";
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
  this.style.backgroundColor = color;
}

function changeColor(colorChoice) {
  color = colorChoice;
}
