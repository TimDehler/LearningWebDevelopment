let board = [];
let nextGenBoard = [];
let global_n = 0;
const board_Element = document.getElementById("board");
const webView = document.getElementById("web-view");

const start = () => {
  global_n = document.getElementById("field-set").value;
  createBoard(global_n);
  createWebViewElements();
};

const translateArrToWebView = () => {
  const webElements = document.querySelectorAll(".web-view_element");

  webElements.forEach((element) => {
    const numbers = element.id.split("-");
    const x = Number(numbers[0].trim());
    const y = Number(numbers[1].trim());
    element.textContent = nextGenBoard[x][y];
  });
};

const createWebViewElements = () => {
  for (let x = 0; x < global_n; x++) {
    for (let y = 0; y < global_n; y++) {
      const tempDoc = document.createElement("div");
      tempDoc.setAttribute("class", "web-view_element");
      tempDoc.textContent = "🟥";
      tempDoc.setAttribute("id", `${x}-${y}`);
      webView.appendChild(tempDoc);
    }
  }

  webView.style.width = `${global_n * 21.9688}px`;
  webView.style.height = `${global_n * 21.3333}px`;

  document.querySelectorAll(".web-view_element").forEach((element) => {
    element.addEventListener("click", function () {
      if (element.textContent === "🟥") {
        element.textContent = "🟩";
      } else {
        element.textContent = "🟥";
      }
    });
  });
};

const run = () => {
  const webElements = document.querySelectorAll(".web-view_element");

  // Need to add removing of event listener

  webElements.forEach((element) => {
    const numbers = element.id.split("-");
    const x = Number(numbers[0].trim());
    const y = Number(numbers[1].trim());

    board[x][y] = element.textContent;
  });
  console.log(board);
  calculateNextGen();
};

const createBoard = (n) => {
  board = returnEmptyBoard(n);
  nextGenBoard = returnEmptyBoard(n);
};

const calculateNextGen = () => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      applyRules(x, y);
    }
  }
  board = nextGenBoard;
  translateArrToWebView();
  nextGenBoard = returnEmptyBoard(global_n);
  setTimeout(() => {
    calculateNextGen();
  }, 400);
};

const applyRules = (x, y) => {
  const neighbours = checkForNeighbours(x, y);

  // Each cell with one or no neighbours dies, as if by solitude.
  if (neighbours <= 1) {
    nextGenBoard[x][y] = "🟥";
  }

  //Each cell with four or more neighbours dies, as if by overpopulation.
  if (neighbours >= 4) {
    nextGenBoard[x][y] = "🟥";
  }

  //Each cell with two or three neighbours survives.
  if (neighbours === 2 || neighbours === 3) {
    if (board[x][y] === "🟩") {
      nextGenBoard[x][y] = "🟩";
    }
  }

  //Each cell with three neighbours becomes populated.
  if (neighbours === 3 && board[x][y] === "🟥") {
    nextGenBoard[x][y] = "🟩";
  }
};

const checkForNeighbours = (x, y) => {
  let neighbours = 0;
  // Check if field is corner
  if (x === 0 && y === 0) {
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x + 1][y] === "🟩") neighbours++;
    if (board[x + 1][y + 1] === "🟩") neighbours++;
    return neighbours;
  } else if (x === board.length - 1 && y === board.length - 1) {
    if (board[x][y - 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y - 1] === "🟩") neighbours++;
    return neighbours;
  } else if (x === 0 && y === board.length - 1) {
    if (board[x][y - 1] === "🟩") neighbours++;
    if (board[x + 1][y] === "🟩") neighbours++;
    if (board[x + 1][y - 1] === "🟩") neighbours++;
    return neighbours;
  } else if (x === board.length - 1 && y === 0) {
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
    return neighbours;
  }

  // Check if field is aside
  if (x === 0) {
    if (board[x][y - 1] === "🟩") neighbours++;
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x + 1][y - 1] === "🟩") neighbours++;
    if (board[x + 1][y] === "🟩") neighbours++;
    if (board[x + 1][y + 1] === "🟩") neighbours++;
  } else if (y === 0) {
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
    if (board[x + 1][y] === "🟩") neighbours++;
    if (board[x + 1][y + 1] === "🟩") neighbours++;
  } else if (x === board.length - 1) {
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
  } else if (y === board.length - 1) {
    if (board[x][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;
  } else {
    if (board[x - 1][y] === "🟩") neighbours++;
    if (board[x - 1][y - 1] === "🟩") neighbours++;
    if (board[x - 1][y + 1] === "🟩") neighbours++;

    if (board[x][y - 1] === "🟩") neighbours++;
    if (board[x][y + 1] === "🟩") neighbours++;

    if (board[x + 1][y] === "🟩") neighbours++;
    if (board[x + 1][y - 1] === "🟩") neighbours++;
    if (board[x + 1][y + 1] === "🟩") neighbours++;
  }
  return neighbours;
};

const fillArray = (n) => {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push("🟥");
  }
  return temp;
};

const returnEmptyBoard = (n) => {
  let emptyBoard = [];
  for (let i = 0; i < n; i++) {
    emptyBoard.push(fillArray(n));
  }
  return emptyBoard;
};
