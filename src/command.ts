import { EDirection } from "./direction";

export enum Command {
  LEFT = "LEFT",
  MOVE = "MOVE",
  PLACE = "PLACE",
  REPORT = "REPORT",
  RIGHT = "RIGHT",
};

export interface INotPlaced {
  isPlaced: false;
}

export interface IPlaced {
  face: EDirection;
  isPlaced: true;
  x: number;
  y: number;
}

export type State = INotPlaced | IPlaced;