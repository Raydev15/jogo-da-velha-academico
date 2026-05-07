import { useState, useEffect } from "react";
import "../styles/tictactoe.css";

/**
 * Design Philosophy: Academic Excellence
 * - Clean, professional interface reflecting university standards
 * - Deep blue and gold color scheme (traditional academic colors)
 * - Elegant typography with clear hierarchy
 * - Smooth animations and transitions
 * - Focus on clarity and user experience
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

  // Render cell with X or O
  const renderCell = (index: number) => {
    const value = board[index];
    const isEmpty = value === null;
    const currentPlayer = isXNext ? "X" : "O";
    const showPreview = isEmpty && !gameOver;

    return (
      <div
        key={index}
        className={`cell ${value ? value.toLowerCase() : ""} ${
          showPreview ? `preview-${currentPlayer.toLowerCase()}` : ""
        }`}
        onClick={() => handleCellClick(index)}
      >
        {value && <span className="cell-value">{value}</span>}
      </div>
    );
  };

  return (
    <div className="tictactoe-container">
      {/* Header */}
      <header className="tictactoe-header">
        <h1 className="tictactoe-title">Jogo da Velha</h1>
        <p className="tictactoe-subtitle">Edição Acadêmica</p>
      </header>

      {/* Main Content */}
      <main className="tictactoe-main">
        {/* Game Status */}
        <div className="game-status">
          {gameOver ? (
            <div className="status-text">
              {winner ? (
                <span className="winner-text">
                  Jogador <strong>{winner}</strong> Venceu! 🎓
                </span>
              ) : (
                <span className="draw-text">Empate! 🤝</span>
              )}
            </div>
          ) : (
            <div className="status-text">
              Turno do jogador: <strong>{isXNext ? "X" : "O"}</strong>
            </div>
          )}
        </div>

        {/* Game Board */}
        <div className="board">{board.map((_, index) => renderCell(index))}</div>

        {/* Reset Button */}
        <button className="reset-button" onClick={handleReset}>
          {gameOver ? "Jogar Novamente" : "Reiniciar Jogo"}
        </button>
      </main>

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-message">
              {winner ? (
                <>
                  <h2>Parabéns!</h2>
                  <p>Jogador {winner} é o vencedor!</p>
                </>
              ) : (
                <>
                  <h2>Empate!</h2>
                  <p>Que jogo emocionante!</p>
                </>
              )}
            </div>
            <button className="overlay-button" onClick={handleReset}>
              Jogar Novamente
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="tictactoe-footer">
        <p>Desenvolvido para fins acadêmicos</p>
      </footer>
    </div>
  );
}
