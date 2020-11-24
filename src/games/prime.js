import getRandomInt from '../utils.js';
import play, { playRound } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const playGame = () => {
  const currentRound = getRandomInt(1, 99);
  const expectedAnswer = isPrime(currentRound) ? 'yes' : 'no';
  return playRound(currentRound, expectedAnswer);
};

export default () => play(task, playGame);
