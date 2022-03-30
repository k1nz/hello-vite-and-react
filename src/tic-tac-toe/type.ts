import React from "react";
import { SetStateType } from "@/type";

export type PlayerType = "X" | "O";
export type BoardType = Array<PlayerType | null>;
export type GameStateType = {
  currentPlayer: PlayerType;
  currentStep: number;
  winner: PlayerType | null;
  history: Array<BoardType>;
};

export interface GameStateCollection {
  gameState: GameStateType;
  setGameState: SetStateType<GameStateType>;
}

// Board
export interface SquarePropsType {
  player: PlayerType | null;
  onClick: React.MouseEventHandler;
}
