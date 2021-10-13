import { IPlaced, State } from "../command";
import { EDirection } from "../direction";
import { checkIfPlaced } from "./checkIfPlaced";
import { move } from "./move";
import { place } from "./place";
import { report } from "./report";
import { left, right } from "./rotate";

export type CommandOutput = {
  move: () => CommandOutput
  place: (x: number, y: number, face: EDirection) => CommandOutput
  report: () => CommandOutput
  left: () => CommandOutput
  right: () => CommandOutput
};

export type Command = (message: (value: string) => void, state?: State ) => CommandOutput;

export const command: Command = (message, state= {
  isPlaced: false
}): CommandOutput => {
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