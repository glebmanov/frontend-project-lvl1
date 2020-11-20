import getRandomInt, { isPrime } from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default async () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isPrime(currentRound) ? 'yes' : 'no';
  return round(currentRound, correctAnswer);
};
