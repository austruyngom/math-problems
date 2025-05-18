function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function sumOfSquaresBetweenNAndM(n: number, m: number): number {
  let totalSum = 0;
  for (let i = Math.max(n - 1, m); i <= Math.min(n + 1, m + 2); i++) {
    if (isPrime(i)) {
      totalSum += i * i;
    }
  }
  return totalSum;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
