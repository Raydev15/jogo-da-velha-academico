import { useState } from "react";
import "../styles/tictactoe.css";

/**
 * Jogo da Velha - Design Exato do Vídeo
 * Minimalista com gradiente verde (#41B883) para ciano (#00D4FF)
 * Células 100px x 100px com bordas brancas
 * X e O desenhados com CSS puro
 */

export default function Home() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check for winner
  const checkWinner = (squares: (string | null)[]): string | null => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Check if board is full
  const isBoardFull = (squares: (string | null)[]): boolean => {
    return squares.every((square) => square !== null);
  };

  // Handle cell click
  const handleCellClick = (index: number) => {
    if (board[index] || winner || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
    } else if (isBoardFull(newBoard)) {
      setGameOver(true);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Reset game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameOver(false);
  };

  // Render cell
  const renderCell = (index: number) => {
    const value = board[index];
    const isEmpty = value === null;
    const currentPlayer = isXNext ? "X" : "O";

    return (
      <div
        key={index}
        className={`cell ${value ? value.toLowerCase() : ""} ${
          isEmpty && !gameOver ? `preview-${currentPlayer.toLowerCase()}` : ""
        }`}
        onClick={() => handleCellClick(index)}
      >
        {value && <span className="cell-symbol">{value}</span>}
      </div>
    );
  };

  return (
    <div className="container">
      {/* Game Board */}
      <div className="board">{board.map((_, index) => renderCell(index))}</div>

      {/* Reset Button */}
      <button className="reset-btn" onClick={handleReset}>
        Reiniciar
      </button>

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="overlay">
          <div className="overlay-text">
            {winner ? `${winner} Venceu!` : "Empate!"}
          </div>
          <button className="overlay-btn" onClick={handleReset}>
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}
