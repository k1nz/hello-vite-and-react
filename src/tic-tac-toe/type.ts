import React from "react";
import { SetStateType } from "@/type";

export type PlayerType = "X" | "O";
export type GameStateType = {
  currentPlayer: PlayerType;
  currentStep: number;
  board: Array<PlayerType | null>;
  winner: PlayerType | null;
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
