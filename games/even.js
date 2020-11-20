import getRandomInt, { isEven } from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const even = async () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isEven(currentRound) ? 'yes' : 'no';
  return round(currentRound, correctAnswer);
};
