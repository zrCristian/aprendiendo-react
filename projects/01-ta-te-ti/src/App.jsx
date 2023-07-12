import { useEffect, useState } from 'react'
import { Square } from  "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame, } from './logic/board'
import { saveGameToLocalStorage, resetGameLocalStorage, } from './logic/localStorage/localStorage'



import confetti from "canvas-confetti"
import './App.css'




export function App() {
  // Esta mal. Por cada ejecucion del codigo obtendriamos el valor del LS, el cual es lento. 1:00.1
    // const boardFromStorage = window.localStorage.getItem("board") 

  // const [board, setBoard] = useState(Array(9).fill(null))
  // ponemos ese callback dentro de la inicializacion del estado ya que los estados se inicializan una vez
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board")
    console.log(boardFromStorage)
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) // cambiar, como TURNS


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null) 

    resetGameLocalStorage()
  }  

    const updateBoard = (index) => {
    // console.log(!!board[index]) => y tambien si hay ganador
    if (board[index] || winner) return  

    // actualizar tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard) // asicrono, en relacion con la linea 72

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToLocalStorage({board: newBoard, turn: newTurn}) 

    // Revisar ganador 
    const newWinner = checkWinnerFrom(newBoard) // en relacion con la linea 75. le paso la nueva tabla ya que la tabla orinal puede ser que no este actualiza, por consecuencia, el programa no funcionaria correctamente
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      // alert(`El ganador es: ${newWinner}`) // posiblmente el valor no se haya actualizado, ya que la actualizacion de los estados son ASINCRONOS
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  
  }

  useEffect(() => {
    console.log("use effect")
  }, [winner])

  return (
    <main className='board'> 
      <h1>Ta Te Ti</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square , index) => {
            return (
              <Square
              key = {index}
              index = {index}
              updateBoard = {updateBoard}
              >
                {square}

              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

      <WinnerModal
    resetGame={resetGame} winner = {winner}></WinnerModal>

    </main>
  )
}

// export default App
