import getRandomInt from '../utils.js';
import play from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameParameters = () => {
  const currentRound = getRandomInt(1, 99);
  const expectedAnswer = isEven(currentRound) ? 'yes' : 'no';
  return [currentRound, expectedAnswer];
};

export default () => play(task, getGameParameters);
