// script.js
let currentPlayer = "X"; // 현재 플레이어를 추적하는 변수 (X 또는 O)
let board = ["", "", "", "", "", "", "", "", ""]; // 게임 보드의 상태를 나타내는 배열

// 셀이 클릭될 때 호출되는 함수
function cellClicked(index) {
    // 이미 채워진 셀을 클릭하면 아무 작업도 수행하지 않음
    if (board[index - 1] !== "") {
        return;
    }

    // 클릭한 셀에 현재 플레이어의 기호를 표시
    document.getElementById("cell" + index).textContent = currentPlayer;
    board[index - 1] = currentPlayer; // 게임 보드 배열 업데이트

    // 승리 조건 확인
    if (checkWin()) {
        document.getElementById("status").textContent = `${currentPlayer}가 이겼습니다!`;
        return;
    }

    // 무승부 조건 확인
    if (checkDraw()) {
        document.getElementById("status").textContent = "무승부입니다!";
        return;
    }

    // 플레이어 변경
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// 승리 조건을 확인하는 함수
function checkWin() {
    // 가로, 세로, 대각선 방향의 승리 조건을 확인
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 가로
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 세로
        [0, 4, 8], [2, 4, 6] // 대각선
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true;
        }
    }

    return false;
}

// 무승부 조건을 확인하는 함수
function checkDraw() {
    // 모든 셀이 채워졌으면 무승부로 판단
    return board.every(cell => cell !== "");
}

// 게임을 리셋하는 함수
function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    for (let i = 1; i <= 9; i++) {
        document.getElementById("cell" + i).textContent = "";
    }
    document.getElementById("status").textContent = "";
}

