import { useState } from "react";
import { GameStateType } from "@/tic-tac-toe/type";
import Board from "@/tic-tac-toe/Board";
import GameStatus from "@/tic-tac-toe/GameStatus";

const initialGameState: GameStateType = {
  currentStep: 0,
  board: new Array(9).fill(null),
  currentPlayer: "O",
  winner: null,
};

const TicTacToe = () => {
  const [gameState, setGameState] = useState<GameStateType>(initialGameState);

  return (
    <div id="TicTacToe">
      <div>
        <button onClick={() => setGameState(initialGameState)}>New Game</button>
      </div>
      <Board gameState={gameState} setGameState={setGameState} />
      <GameStatus gameState={gameState} />
    </div>
  );
};
export default TicTacToe;
