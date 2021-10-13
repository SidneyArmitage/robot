import { directionToText, EDirection, textToDirection, validateDirection } from "./direction";

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

describe("validateDirection", () => {

  it("invalid direction", () => {
    expect(validateDirection("")).toBe(false);
    expect(validateDirection("north")).toBe(false);
  });

  describe("on valid directions", () => {

    it("NORTH", () => {
      expect(validateDirection("NORTH")).toBe(true);
    });
    
    it("SOUTH", () => {
      expect(validateDirection("SOUTH")).toBe(true);
    });
    
    it("EAST", () => {
      expect(validateDirection("EAST")).toBe(true);
    });
    
    it("WEST", () => {
      expect(validateDirection("WEST")).toBe(true);
    });

  });
});