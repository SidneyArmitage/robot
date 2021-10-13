import { directionToText, EDirection, textToDirection } from "./direction";

describe("direction To Text", () => {

  it("NORTH", () => {
    expect(directionToText(EDirection.NORTH)).toBe("NORTH");
  });

  it("EAST", () => {
    expect(directionToText(EDirection.EAST)).toBe("EAST");
  });
  
  it("SOUTH", () => {
    expect(directionToText(EDirection.SOUTH)).toBe("SOUTH");
  });
  
  it("WEST", () => {
    expect(directionToText(EDirection.WEST)).toBe("WEST");
  });

});

describe("text to direction", () => {

  it("NORTH", () => {
    expect(textToDirection("NORTH")).toBe(EDirection.NORTH);
  });
  
  it("EAST", () => {
    expect(textToDirection("EAST")).toBe(EDirection.EAST);
  });
  
  it("SOUTH", () => {
    expect(textToDirection("SOUTH")).toBe(EDirection.SOUTH);
  });
  
  it("WEST", () => {
    expect(textToDirection("WEST")).toBe(EDirection.WEST);
  });
});