const createBoard = (size) => {
  let board = document.getElementById("board");
  let squareDivs = board.querySelectorAll("div");
  squareDivs.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let squaredSize = Math.pow(size, 2);

  for (let i = 0; i < squaredSize; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    square.style.border = "2px solid black";
    board.insertAdjacentElement("beforeend", square);
  }
};

// createBoard(input);

function changeSize(value) {
  createBoard(value);
}
