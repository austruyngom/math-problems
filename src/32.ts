function solution({ n }) {
  if (!n) {
    throw new Error("Parameter 'n' is required");
  }

  let result = 0;

  while (true) {
    result += Math.pow(n, 1 / n);
    if (result % n === 0) {
      return result;
    }
  }
}
