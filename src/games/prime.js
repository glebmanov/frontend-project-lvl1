import getRandomInt, { isPrime } from '../utils.js';
import { playRound } from '../index.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isPrime(currentRound) ? 'yes' : 'no';
  return playRound(currentRound, correctAnswer);
};
