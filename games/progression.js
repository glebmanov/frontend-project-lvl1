import getRandomInt from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'What number is missing in the progression?';

const getProgression = () => {
  const startProg = getRandomInt(1, 9);
  const stepOfProg = getRandomInt(1, 9);
  const result = [startProg];
  const progressionLength = 10;
  for (let i = 0; result.length < progressionLength; i += 1) {
    result.push(result[i] + stepOfProg);
  }
  return result;
};

export default () => {
  const progression = getProgression();
  const randomIndx = getRandomInt(0, 9);
  const correctAnswer = progression[randomIndx];
  progression[randomIndx] = '..';
  const currentRound = progression.join(' ');
  return round(currentRound, correctAnswer);
};
