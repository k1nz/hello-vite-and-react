import React from "react";
import { GameStateCollection, GameStateType } from "@/tic-tac-toe/type";
import styles from "./board.module.less";

const GetPlayer: React.FC<{ gameState: GameStateType }> = ({ gameState }) => {
  const { currentPlayer, winner, currentStep, history } = gameState;

  return (
    <>
      {winner && history.length === currentStep + 1 ? (
        <div>Winner: {winner}</div>
      ) : (
        <div>Current Player: {currentPlayer}</div>
      )}
      Current Step: {currentStep}
    </>
  );
};

const GameHistory: React.FC<GameStateCollection> = ({
  gameState,
  setGameState,
}) => {
  const { history } = gameState;
  const backtrack = (idx: number) => {
    setGameState((prevState) => ({
      ...prevState,
      currentPlayer: idx % 2 === 0 ? "O" : "X",
      currentStep: idx,
    }));
  };

  return (
    <div className={styles.historyList}>
      {history.map((_, idx) => (
        <button onClick={() => backtrack(idx)} key={idx}>
          Step {idx}
        </button>
      ))}
    </div>
  );
};

const GameStatus: React.FC<GameStateCollection> = (props) => {
  return (
    <div className={styles.gameStatus}>
      <GetPlayer {...props} />
      <GameHistory {...props} />
    </div>
  );
};
export default GameStatus;
