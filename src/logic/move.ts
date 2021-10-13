import { IPlaced } from "../command";

/*
 *  To detect illegal moves the value is clamped. This ensures that the state is kept constant.
 * we detect direction based upon the modulo 2 value of the enum.
 */
export const move = ({x, y, face, ...rest}: IPlaced): IPlaced => ({
  ...rest,
  x: Math.max(0, Math.min(4, x - (face % 2 === 1 ? (face - 2) : 0))),
  y: Math.max(0, Math.min(4, y - (face % 2 === 0 ? (face - 1) : 0))),
  face: face,
});