import { command } from "./command";
import { EDirection } from "../direction";

describe("command", () => {

  describe("report", () => {   

    it("it reports", () => {
      let counter = 0;
      // test report twice to ensure object is returned
      command((message) => {
        counter += 1;
        expect(message).toBe("0, 0, NORTH");
      }).place(0, 0, EDirection.NORTH)
      .report()
      .report();
      expect(counter).toBe(2);
    });

    it("does not report", () => {
      command((_) => {
        fail();
      }).report();
    });

  });

  describe("runs when placed", () => {

    it("moves", () => {
      let counter = 0;
      // test report twice to ensure object is returned
      command((message) => {
        counter += 1;
        expect(message).toBe("0, 1, NORTH");
      }).place(0, 0, EDirection.NORTH)
      .move()
      .report();
      expect(counter).toBe(1);
    });

    it("turns left", () => {
      let counter = 0;
      // test report twice to ensure object is returned
      command((message) => {
        counter += 1;
        expect(message).toBe("0, 0, WEST");
      }).place(0, 0, EDirection.NORTH)
      .left()
      .report();
      expect(counter).toBe(1);
    });
    
    it("turns right", () => {
      let counter = 0;
      // test report twice to ensure object is returned
      command((message) => {
        counter += 1;
        expect(message).toBe("0, 0, EAST");
      }).place(0, 0, EDirection.NORTH)
      .right()
      .report();
      expect(counter).toBe(1);
    });

  });

  describe("does not run when not placed", () => {

    it("moves", () => {
      command((_) => {
        fail();
      }).move()
      .report();
    });

    it("turns left", () => {
      command((_) => {
        fail();
      }).left()
      .report();
    });
    
    it("turns right", () => {
      command((_) => {
        fail();
      }).right()
      .report();
    });

  });

});