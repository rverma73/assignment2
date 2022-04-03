function func() {
  const board = document.querySelector(".board");
  for (let rows = 0; rows < 8; rows++) {
    for (let columns = 0; columns < 8; columns++) {
      const box = document.createElement("button");
      box.style.width = board.clientWidth / 8 + "px";
      box.style.height = board.clientHeight / 8 + "px";
      box.coordinates = [rows, columns];
      box.id = `${rows},${columns}`;
      box.addEventListener("click", function () {
        console.log(
          findPossibleMoves(box, box.coordinates[0], box.coordinates[1])
        );
        console.log("box: ", box.coordinates);
      });
      board.append(box);
    }
  }
  resetBoardColor();
}
// find number of possible moves of knight
function findPossibleMoves(box, p, q) {
  resetBoardColor();
  box.style.background = "orange";
  // All possible moves of a knight
  let n = 8;
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];
  let count = 0;
  // Check if each possible move is valid or not
  for (let i = 0; i < 8; i++) {
    // Position of knight after move
    let x = p + X[i];
    let y = q + Y[i];
    // count valid moves
    if (x >= 0 && y >= 0 && x < n && y < n) {
      document.getElementById(`${x},${y}`).style.background = "green";
      count++;
    }
  }
  return count;
}

// reset all colors of squares
function resetBoardColor() {
  for (let x = 0; x < 8; x++) {
    let boxColor;
    let boxStartColorWhite = x % 2 == 0 ? true : false;

    for (let y = 0; y < 8; y++) {
      if (boxStartColorWhite) boxColor = y % 2 === 0 ? "white" : "black";
      else boxColor = y % 2 === 0 ? "black" : "white";

      document.getElementById(`${x},${y}`).style.background = boxColor;
      y % 2 === 0 ? "black" : "white";
    }
  }
}
func();
