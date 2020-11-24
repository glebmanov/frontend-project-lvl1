import getRandomInt from '../utils.js';
import play, { playRound } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  const currentRound = getRandomInt(1, 99);
  const correctAnswer = isEven(currentRound) ? 'yes' : 'no';
  return playRound(currentRound, correctAnswer);
};

export default () => play(task, playGame);
