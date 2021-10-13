import { EDirection } from "../direction";
import { move } from "./move";

describe("move", () => {

  describe("legal moves", () => {

    it("moves north", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.NORTH,
      })).toStrictEqual({
        isPlaced: true,
        x: 0,
        y: 1,
        face: EDirection.NORTH,
      });
    });

    it("moves south", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 4,
        face: EDirection.SOUTH,
      })).toStrictEqual({
        isPlaced: true,
        x: 0,
        y: 3,
        face: EDirection.SOUTH,
      });
    });

    it("moves east", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.EAST,
      })).toStrictEqual({
        isPlaced: true,
        x: 1,
        y: 0,
        face: EDirection.EAST,
      });
    });

    it("moves west", () => {
      expect(move({
        isPlaced: true,
        x: 4,
        y: 0,
        face: EDirection.WEST,
      })).toStrictEqual({
        isPlaced: true,
        x: 3,
        y: 0,
        face: EDirection.WEST,
      });
    });

  });

  describe("invalid moves", () => {

    it("moves south", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.SOUTH,
      })).toStrictEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.SOUTH,
      });
    });

    it("moves north", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 4,
        face: EDirection.NORTH,
      })).toStrictEqual({
        isPlaced: true,
        x: 0,
        y: 4,
        face: EDirection.NORTH,
      });
    });

    it("moves west", () => {
      expect(move({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.WEST,
      })).toStrictEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        face: EDirection.WEST,
      });
    });

    it("moves east", () => {
      expect(move({
        isPlaced: true,
        x: 4,
        y: 0,
        face: EDirection.EAST,
      })).toStrictEqual({
        isPlaced: true,
        x: 4,
        y: 0,
        face: EDirection.EAST,
      });
    });

  });
});