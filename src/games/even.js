import getRandomInt, { isEven } from '../utils.js';
import { playRound } from '../index.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isEven(currentRound) ? 'yes' : 'no';
  return playRound(currentRound, correctAnswer);
};
