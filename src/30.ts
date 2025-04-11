function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1, next = 0;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return next;
}
