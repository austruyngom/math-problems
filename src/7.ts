interface Problem {
  number: number;
  solution: string;
}

const problem1: Problem = {
  number: 1,
  solution: "The square root of 4 is 2",
};

const problem2: Problem = {
  number: 2,
  solution: "The sum of 3 and 5 is 8",
};

const problem3: Problem = {
  number: 3,
  solution: "The product of 6 and 9 is 54",
};

const problems: Problem[] = [problem1, problem2, problem3];
