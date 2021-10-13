import { IPlaced } from "../command";
import { directionToText } from "../direction";

// output based upon the example
export const report = ({ x, y, face}: IPlaced, callback: (value: string)=> void): void => 
  callback(`${x}, ${y}, ${directionToText(face)}`);