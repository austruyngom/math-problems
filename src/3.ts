// Generate a random mathematical problem using the Random library
const random = require('random');

let numbers = [];
for (let i = 1; i <= 4; i++) {
  numbers.push(Math.floor(random.float() * 10));
}

let operation = ['+', '-', '*', '/'][Math.floor(random.float() * 3)];

let answer = '';
switch (operation) {
  case '+':
    answer = numbers[0] + numbers[1];
    break;
  case '-':
    answer = numbers[0] - numbers[1];
    break;
  case '*':
    answer = numbers[0] * numbers[1];
    break;
  case '/':
    if (numbers[1] === 0) {
      operation = ['+', '-', '*'][Math.floor(random.float() * 2)];
      break;
    }
    answer = numbers[0] / numbers[1];
    break;
}

console.log(`${numbers[0]} ${operation} ${numbers[1]} = ${answer}`);
