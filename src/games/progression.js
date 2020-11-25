import getRandomInt from '../utils.js';
import play from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = (length, start, step) => {
  const result = [];
  for (let i = 0; result.length < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const getGameParameters = () => {
  const start = getRandomInt(1, 9);
  const step = getRandomInt(1, 9);
  const length = 10;
  const progression = getProgression(length, start, step);
  const randomIndx = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[randomIndx];
  progression[randomIndx] = '..';
  const currentRound = progression.join(' ');
  const expectedAnswer = correctAnswer.toString();
  return [currentRound, expectedAnswer];
};

export default () => play(task, getGameParameters);
