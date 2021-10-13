import command from "../logic";
import { run, validate, process } from "./command";

describe("validate", () => {

  describe("valid input", () => {

    it("MOVE", () => {
      expect(validate("MOVE")).toBe(true);
    });

    it("REPORT", () => {
      expect(validate("REPORT")).toBe(true);
    });

    it("RIGHT", () => {
      expect(validate("RIGHT")).toBe(true);
    });

    it("LEFT", () => {
      expect(validate("LEFT")).toBe(true);
    });

    describe("place", () => {

      it("0,0 facing north", () => {
        expect(validate("PLACE 0,0,NORTH")).toBe(true);
      });

      it("1,2 facing east", () => {
        expect(validate("PLACE 1,2,EAST")).toBe(true);
      });
      
      it("4,4 facing west", () => {
        expect(validate("PLACE 4,4,SOUTH")).toBe(true);
      });
      
      it("0,20 facing west", () => {
        expect(validate("PLACE 0,20,WEST")).toBe(true);
      });

    });

  });

  describe("invalid input", () => {

    it("fails on empty string", () => {
      expect(validate("")).toBe(false);
    });

    it("fails on undefined", () => {
      // @ts-expect-error
      expect(validate(undefined)).toBe(false);
    });

    it("fails on extra appended character", () => {
      expect(validate("LEFT1")).toBe(false);
    });
    
    it("fails on extra prepended character", () => {
      expect(validate("1LEFT")).toBe(false);
    });
    
    it("fails on lowercase", () => {
      expect(validate("left")).toBe(false);
    });

    it("fails on missing space", () => {
      expect(validate("PLACE0,4,WEST")).toBe(false);
    });
    
    it("fails on decimal", () => {
      expect(validate("PLACE 0.0,4,WEST")).toBe(false);
    });

    it("fails on non decimal number", () => {
      expect(validate("PLACE 0x4,4,WEST")).toBe(false);
    });
  });

});

describe("run", () => {
  
  it("runs a place and report", () => {
    let counter = 0;
    const app = command((message) => {
      counter += 1;
      expect(message).toBe("0,0,EAST");
    });
    run(run(app, "PLACE 0,0,EAST"), "REPORT");
    expect(counter).toBe(1);
  });

  it("runs a move", () => {
    let counter = 0;
    const app = command((message) => {
      counter += 1;
      expect(message).toBe("1,0,EAST");
    });
    run(run(run(app, "PLACE 0,0,EAST"), "MOVE"), "REPORT");
    expect(counter).toBe(1);
  });

  it("runs left", () => {
    let counter = 0;
    const app = command((message) => {
      counter += 1;
      expect(message).toBe("0,0,NORTH");
    });
    run(run(run(app, "PLACE 0,0,EAST"), "LEFT"), "REPORT");
    expect(counter).toBe(1);
  });

  it("runs right", () => {
    let counter = 0;
    const app = command((message) => {
      counter += 1;
      expect(message).toBe("0,0,SOUTH");
    });
    run(run(run(app, "PLACE 0,0,EAST"), "RIGHT"), "REPORT");
    expect(counter).toBe(1);
  });

  it("fails on invalid command", () => {
    expect(() => {
      const app = command(_ => {});
      run(app, "error")
    }).toThrow("Invalid command");
  });

});

describe("process", () => {

  it("runs on valid inputs", () => {
    let counter = 0;
    process([
      "PLACE 0,0,NORTH",
      "MOVE",
      "REPORT",
    ], (message) => {
      counter += 1;
      expect(message).toBe("0,1,NORTH");
    });
    expect(counter).toBe(1);
  });

  it("ignores invalid inputs", () => {
    let counter = 0;
    process([
      "PLACE 0,0,NORTH",
      "noise",
      "MOVE",
      "REPORT",
    ], (message) => {
      counter += 1;
      expect(message).toBe("0,1,NORTH");
    });
    expect(counter).toBe(1);
  });

});