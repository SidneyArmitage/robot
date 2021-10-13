import { EDirection } from "./direction";

export enum Command {
  LEFT,
  MOVE,
  PLACE,
  REPORT,
  RIGHT,
}

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