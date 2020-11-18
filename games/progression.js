import promptly from 'promptly';
import { getIntForProg } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

const getProgression = () => {
  const startProg = getIntForProg();
  const stepOfProg = getIntForProg();
  const result = [startProg];
  const progressionLength = 10;
  for (let i = 0; result.length < progressionLength; i += 1) {
    result.push(result[i] + stepOfProg);
  }
  return result;
};

export default async () => {
  const progression = getProgression();
  const randomIndx = getIntForProg();
  const correctAnswer = progression[randomIndx];
  progression[randomIndx] = '..';
  const currentRound = progression.join(' ');
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  return checkAnswer(userAnswer, correctAnswer);
};
