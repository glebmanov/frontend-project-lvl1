import getRandomInt from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const prime = async () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isPrime(currentRound);
  return round(currentRound, correctAnswer);
};
