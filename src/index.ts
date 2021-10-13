import { readFileSync } from "fs";
import { argv } from "process";
import { process } from "./io/command";
import output from "./io/output";

const main = () => {
  const input = readFileSync(argv[2]).toString();
  process(input.split("\n"), output);
};

main();