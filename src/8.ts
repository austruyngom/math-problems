import { random } from "https://deno.land/x/random@v1.1.0/mod.ts";

const problem = `Find the value of x in the equation: 3x + 5 = 20`;

// Generate a random number between 1 and 10 for the solution
const solution = random(1, 10);

console.log(`The solution to the equation ${problem} is ${solution}`);
