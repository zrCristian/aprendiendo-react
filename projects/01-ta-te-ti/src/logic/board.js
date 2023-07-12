import { WINNER_COMBOS  } from "../constants"


export const checkWinnerFrom = (boardToCheck) => {
    // Revisar las combinaciones ganadoras
    for (let combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]

        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    // console.log(newBoard)
    // console.log( newBoard.every( square => square !== null))
    return newBoard.every( square => square !== null)
}

