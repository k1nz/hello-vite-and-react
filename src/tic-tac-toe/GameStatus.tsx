import React from "react";
import { GameStateType } from "@/tic-tac-toe/type";
import styles from "./board.module.less";

const GameStatus: React.FC<{ gameState: GameStateType }> = ({ gameState }) => {
  const { currentPlayer, winner } = gameState;

  return (
    <div className={styles.gameStatus}>
      {winner ? (
        <div>Winner: {winner}</div>
      ) : (
        <div>Current Player: {currentPlayer}</div>
      )}
    </div>
  );
};
export default GameStatus;
