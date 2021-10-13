import { textToDirection } from "../direction";
import command from "../logic";
import { CommandOutput } from "../logic/command";

// regex used due to simple nature of the inputs
export const validate = (command: string) => 
  /^((PLACE\s[0-9]+,[0-9]+,(NORTH|EAST|SOUTH|WEST))|MOVE|REPORT|RIGHT|LEFT)$/.test(command);

export const run = (app: CommandOutput, instruction: string): CommandOutput => {
  const [cmd, parameters] = instruction.split(" ");
  switch(cmd) {
    case "PLACE":
      const args = parameters.split(",");
      return app.place(Number.parseInt(args[0]), Number.parseInt(args[1]), textToDirection(args[2]));
    case "MOVE":
      return app.move();
    case "REPORT":
      return app.report();
    case "RIGHT":
      return app.right();
    case "LEFT":
      return app.left();
    default:
      throw Error("Invalid command");
  }
};

export const process = (input: string[], output: (message: string) => void) => {
  input.map(instruction => instruction.trim()).filter(validate).reduce(run, command(output));
};