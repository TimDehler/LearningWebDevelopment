let board = [];
let nextGenBoard = [];
let global_n = 0;
const board_Element = document.getElementById("board");

const fillArray = (n) => {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push("🪦");
  }
  return temp;
};

const prepare = () => {
  board[4][4] = "🌱";
  board[5][5] = "🌱";
  board[6][5] = "🌱";
  board[6][4] = "🌱";
  board[6][3] = "🌱";
};

const returnEmptyBoard = (n) => {
  let emptyBoard = [];
  for (let i = 0; i < n; i++) {
    emptyBoard.push(fillArray(n));
  }
  return emptyBoard;
};

// Create the game board for game of life with n*n
const createBoard = (n) => {
  global_n = n;
  board = returnEmptyBoard(n);
  nextGenBoard = returnEmptyBoard(n);
  prepare();
  displayBoard();
};

const calculateNextGen = () => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      checkNextGenStatusForCell(x, y);
    }
  }
  board = nextGenBoard;
  displayBoard();
  nextGenBoard = returnEmptyBoard(global_n);
  setTimeout(() => {
    calculateNextGen();
  }, 400);
};

// Check the status of a specific cell for the next gen (true = alive / false = dead)
const checkNextGenStatusForCell = (x, y) => {
  const neighbours = checkForNeighbours(x, y);

  // Each cell with one or no neighbours dies, as if by solitude.
  if (neighbours <= 1) {
    nextGenBoard[x][y] = "🪦";
  }

  //Each cell with four or more neighbours dies, as if by overpopulation.
  if (neighbours >= 4) {
    nextGenBoard[x][y] = "🪦";
  }

  //Each cell with two or three neighbours survives.
  if (neighbours === 2 || neighbours === 3) {
    if (board[x][y] === "🌱") {
      nextGenBoard[x][y] = "🌱";
    }
  }

  //Each cell with three neighbours becomes populated.
  if (neighbours === 3 && board[x][y] === "🪦") {
    nextGenBoard[x][y] = "🌱";
  }
};

// Check the neighbours of a specific cell and return their count
const checkForNeighbours = (x, y) => {
  let neighbours = 0;
  // Check if field is corner
  if (x === 0 && y === 0) {
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x + 1][y] === "🌱") neighbours++;
    if (board[x + 1][y + 1] === "🌱") neighbours++;
    return neighbours;
  } else if (x === board.length - 1 && y === board.length - 1) {
    if (board[x][y - 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y - 1] === "🌱") neighbours++;
    return neighbours;
  } else if (x === 0 && y === board.length - 1) {
    if (board[x][y - 1] === "🌱") neighbours++;
    if (board[x + 1][y] === "🌱") neighbours++;
    if (board[x + 1][y - 1] === "🌱") neighbours++;
    return neighbours;
  } else if (x === board.length - 1 && y === 0) {
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
    return neighbours;
  }

  // Check if field is aside
  if (x === 0) {
    if (board[x][y - 1] === "🌱") neighbours++;
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x + 1][y - 1] === "🌱") neighbours++;
    if (board[x + 1][y] === "🌱") neighbours++;
    if (board[x + 1][y + 1] === "🌱") neighbours++;
  } else if (y === 0) {
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
    if (board[x + 1][y] === "🌱") neighbours++;
    if (board[x + 1][y + 1] === "🌱") neighbours++;
  } else if (x === board.length - 1) {
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
  } else if (y === board.length - 1) {
    if (board[x][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;
  } else {
    if (board[x - 1][y] === "🌱") neighbours++;
    if (board[x - 1][y - 1] === "🌱") neighbours++;
    if (board[x - 1][y + 1] === "🌱") neighbours++;

    if (board[x][y - 1] === "🌱") neighbours++;
    if (board[x][y + 1] === "🌱") neighbours++;

    if (board[x + 1][y] === "🌱") neighbours++;
    if (board[x + 1][y - 1] === "🌱") neighbours++;
    if (board[x + 1][y + 1] === "🌱") neighbours++;
  }
  return neighbours;
};

const displayBoard = () => {
  board_Element.textContent = board;
};
