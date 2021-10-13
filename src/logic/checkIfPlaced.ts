import { IPlaced, State } from "../command";
import { command, CommandOutput } from "./command";

export const checkIfPlaced = (message: (value: string) => void, state: State, operation: (state: IPlaced) => IPlaced): CommandOutput => {
  if (state.isPlaced === false) {
    return command(message, state);
  }
  return command(message, operation(state));
};