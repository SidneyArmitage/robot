import { EDirection } from "../direction";
import { place } from "./place";

describe("place", () => {

  describe("legal placement", () => {

    it("places facing north", () => {
      expect(place(0, 0, EDirection.NORTH)).toStrictEqual({
        isPlaced: true,
        face: EDirection.NORTH,
        x: 0,
        y: 0,
      });
    });
    
    it("places facing east", () => {
      expect(place(1, 2, EDirection.EAST)).toStrictEqual({
        isPlaced: true,
        face: EDirection.EAST,
        x: 1,
        y: 2,
      });
    });
    
  });

  describe("invalid placement", () => {

    it("places to the west of the table", () => {
      expect(place(-1, 0, EDirection.NORTH)).toStrictEqual({
        isPlaced: false,
      });
    });

    it("places to the east of the table", () => {
      expect(place(5, 0, EDirection.NORTH)).toStrictEqual({
        isPlaced: false,
      });
    });

    it("places to the north of the table", () => {
      expect(place(0, 5, EDirection.NORTH)).toStrictEqual({
        isPlaced: false,
      });
    });
    
    it("places to the south of the table", () => {
      expect(place(0, -1, EDirection.NORTH)).toStrictEqual({
        isPlaced: false,
      });
    });
  });

});