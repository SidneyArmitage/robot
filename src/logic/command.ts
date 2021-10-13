import { IPlaced, State } from "../command";
import { EDirection } from "../direction";
import { checkIfPlaced } from "./checkIfPlaced";
import { move } from "./move";
import { place } from "./place";
import { report } from "./report";
import { left, right } from "./rotate";

export const command = (message: (value: string) => void, state: State = {
  isPlaced: false
}) => {
  return {
    move: () => checkIfPlaced(message, state, move),
    place: (x: number, y: number, face: EDirection) => command(message, place(x, y, face)),
    report: () => {
      if (state.isPlaced === true) {
        report(state, message);
      }
      return command(message, state);
    },
    left: () => checkIfPlaced(message, state, left),
    right: () => checkIfPlaced(message, state, right),
  }
};