const cells = document.querySelectorAll("[datacell]")
let turn = 'x'

cells.forEach(cell => cell.addEventListener('click', cellClicked, {once: true}))

function cellClicked(e) {
    // Draw a move, check for a win, check for draw, switch turns
    const cell = e.target
    const currentMove = turn
    drawMove(cell, currentMove)
    changeMove();
}

function drawMove(cell, move) {
    cell.classList.add(move)
}

function changeMove() {
    if (turn === 'x') turn = 'o';
    else turn = 'x'
}
