import { EDirection } from "../direction";
import { left, right } from "./rotate";


describe("left", () => {

  it("rotates the face", () => {
    expect(left({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.WEST,
    })).toStrictEqual({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.SOUTH,
    });
  });

  it("rotates the face over the reset", () => {
    expect(left({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.NORTH,
    })).toStrictEqual({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.WEST,
    });
  });

});

describe("right", () => {

  it("rotates the face", () => {
    expect(right({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.SOUTH,
    })).toStrictEqual({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.WEST,
    });
  });

  it("rotates the face over the reset", () => {
    expect(right({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.WEST,
    })).toStrictEqual({
      isPlaced: true,
      x: 0,
      y: 0,
      face: EDirection.NORTH,
    });
  });

});