import { IPlaced, State } from "../command";
import { command } from "./command";

export const checkIfPlaced = (message: (value: string) => void, state: State, operation: (state: IPlaced) => IPlaced) => {
  if (state.isPlaced === false) {
    return command(message, state);
  }
  return command(message, operation(state));
};