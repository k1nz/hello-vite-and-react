import { GameStateCollection, SquarePropsType } from "@/tic-tac-toe/type";
import styles from "./board.module.less";
import React from "react";

const SUCCESS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square: React.FC<SquarePropsType> = ({ player, onClick }) => {
  return (
    <div className={styles.square} onClick={onClick}>
      <div>{player}</div>
    </div>
  );
};

const Board: React.FC<GameStateCollection> = ({ gameState, setGameState }) => {
  const { board } = gameState;
  const checkWinner = (board: typeof gameState["board"]) => {
    for (const successIndexArr of SUCCESS) {
      const [a, b, c] = successIndexArr;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`${board[a]} Win!`);
        return board[a];
      }
    }
    return null;
  };

  const squareClick = (index: number) => {
    if (board[index] || gameState.winner !== null) return;
    const currentBoard = board.map((originalPlayer, idx) => {
      if (originalPlayer === null && idx === index)
        return gameState.currentPlayer;
      return originalPlayer;
    });
    const nextPlayer = gameState.currentPlayer === "X" ? "O" : "X";
    const winner = checkWinner(currentBoard);

    setGameState((prevState) => ({
      ...prevState,
      currentPlayer: nextPlayer,
      board: currentBoard,
      winner,
    }));
  };

  return (
    <div className={styles.board}>
      {board.map((player, idx) => (
        <Square player={player} key={idx} onClick={() => squareClick(idx)} />
      ))}
    </div>
  );
};
export default Board;
