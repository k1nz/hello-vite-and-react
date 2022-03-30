import {
  BoardType,
  GameStateCollection,
  SquarePropsType,
} from "@/tic-tac-toe/type";
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
  const { history, currentStep, currentPlayer } = gameState;
  const boardSnapshot = history[currentStep];

  const checkWinner = (currentBoard: BoardType) => {
    for (const successIndexArr of SUCCESS) {
      const [a, b, c] = successIndexArr;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        alert(`${currentBoard[a]} Win!`);
        return currentBoard[a];
      }
    }
    return null;
  };

  const squareClick = (index: number) => {
    const nextStep = currentStep + 1;
    if (
      boardSnapshot[index] ||
      (gameState.winner !== null && history.length === nextStep) // 判断是否已经赢得比赛，并且当前为最后一次记录
    )
      return;
    const currentBoard = boardSnapshot.map((originalPlayer, idx) => {
      if (originalPlayer === null && idx === index) return currentPlayer;
      return originalPlayer;
    });
    // @ts-ignore
    const newHistory = structuredClone(
      history.slice(0, currentStep + 1)
    ) as typeof history;
    newHistory.push(currentBoard);
    const nextPlayer = nextStep % 2 === 0 ? "O" : "X";
    const winner = checkWinner(currentBoard);

    setGameState({
      currentStep: nextStep,
      currentPlayer: nextPlayer,
      history: newHistory,
      winner,
    });
  };

  return (
    <div className={styles.board}>
      {boardSnapshot.map((player, idx) => (
        <Square player={player} key={idx} onClick={() => squareClick(idx)} />
      ))}
    </div>
  );
};
export default Board;
