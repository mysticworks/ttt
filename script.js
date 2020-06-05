const cells = document.querySelectorAll('[datacell]')
const board = document.getElementById('board')
const winMessage = document.querySelector('[data-winning-text]')
const winning = document.getElementById('winning')
const playAgain = document.getElementById('playAgainButton')
const winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
]
let turn

startGame()

function startGame() {
    cells.forEach(cell => {
        cell.classList.remove('x')
        cell.classList.remove('o')
        cell.addEventListener('click', cellClicked, {once: true})
    })
    playAgain.addEventListener('click', playAgainClicked)
    turn = 'x'
    winning.classList.remove('show')
}

function cellClicked(e) {
    // Draw a move, check for a win, check for draw, switch turns
    const cell = e.target
    const currentMove = turn
    drawMove(cell, currentMove)

    if (checkWin(currentMove)) endGame(false)
    else if (checkDraw()) endGame(true)

    changeMove();
    changeHover();
}

function drawMove(cell, move) {
    cell.classList.add(move)
}

function checkWin(move) {
    return winSituations.some(combination => {
        return combination.every(cellNumber => {
            return cells[cellNumber].classList.contains(move)
        })
    })
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o')
    })
}

function changeMove() {
    if (turn === 'x') turn = 'o'
    else turn = 'x'
}

function changeHover() {
    board.classList.remove('x')
    board.classList.remove('o')
    board.classList.add(turn)
}

function endGame(isDraw) {
    if (isDraw) winMessage.innerText = "It's a Draw!"
    else if (turn === 'x') winMessage.innerText = "X's Win!"
    else winMessage.innerText = "O's Win!"

    winning.classList.add('show')

}

function playAgainClicked(e) {
    startGame()
}
