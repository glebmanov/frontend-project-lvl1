import { getRandomInt, isPrime } from '../src/cli.js';
import { round } from '../src/index.js';

export default async () => {
  const currentRound = getRandomInt();
  const correctAnswer = isPrime(currentRound);
  return round(currentRound, correctAnswer);
};
