import { State } from "../command";
import { EDirection } from "../direction"

export const place = (x: number, y: number, face: EDirection): State => {
  if (x >= 0 && y >= 0 && x <= 4 && y <= 4) {
    return {
      face: face,
      isPlaced: true,
      x: x,
      y: y,
    };
  }

  return {
    isPlaced: false,
  };
};