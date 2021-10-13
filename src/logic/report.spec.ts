import { EDirection } from "../direction";
import { report } from "./report";

describe("report", () => {

  it("returns for north", () => {
    report({
      x: 0, 
      y: 0, 
      face: EDirection.NORTH,
      isPlaced: true,
    }, (value) => {
      expect(value).toBe("0,0,NORTH");
    });
  });
});