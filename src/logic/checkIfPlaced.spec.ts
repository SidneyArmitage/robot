import { EDirection } from "../direction";
import { checkIfPlaced } from "./checkIfPlaced";

// tests added later due to initial tests in command not providing proper visibility on checkIfPlaced functionality
describe("check if placed", () => {

  it("runs if placed", () => {
    let counter = 0;
    checkIfPlaced((_) => {}, {
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.NORTH,
    }, (out) => {
      counter += 1;
      return out;
    });
    expect(counter).toBe(1);
  });

  it("does not run if not placed", () => {
    checkIfPlaced((_) => {}, {
      isPlaced: false,
    }, (_) => {
      fail();
    });
  });

});