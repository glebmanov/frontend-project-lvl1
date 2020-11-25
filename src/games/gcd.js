import getRandomInt from '../utils.js';
import play from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const getGameData = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  const expectedAnswer = correctAnswer.toString();
  return [question, expectedAnswer];
};

export default () => play(task, getGameData);
