import { getRandomInt, gcd } from '../src/cli.js';
import { round } from '../src/index.js';

export default async () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const currentRound = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return round(currentRound, correctAnswer);
};
