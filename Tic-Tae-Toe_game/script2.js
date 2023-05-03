let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function cellClicked(index) {

    if(board[index - 1] !== ""){
        return;
    }
    
    document.getElementById("cell" + index).textContent = currentPlayer;
    board[index - 1] = currentPlayer;
    
    if (checkWin()) {
        document.getElementById("status").textContent = `${currentPlayer}가 Win`;
        return;
    }
    
    if (checkDraw()) {
        document.getElementById("status").textContent = "Draw";
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(currentPlayer);
}

function checkWin(){
    const winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for(const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer){
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function resetGame(){
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    for (let i = 1; i <= 9; i++) {
        document.getElementById("cell" + i ).textContent = "";
    }
    document.getElementById("status").textContent = "";
}