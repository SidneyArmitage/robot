import { IPlaced } from "../command"
import { mod } from "../util"

export const left = ({face, ...rest}: IPlaced): IPlaced => ({
  ...rest,
  face: mod(face - 1, 4),
});


export const right = ({face, ...rest}: IPlaced): IPlaced => ({
  ...rest,
  face: mod(face + 1, 4),
});