import getRandomInt from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export default () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const currentRound = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return round(currentRound, correctAnswer);
};