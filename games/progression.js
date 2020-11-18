import promptly from 'promptly';
import { getIntForProg } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

const getProgression = () => {
  const startProg = getIntForProg();
  const stepOfProg = getIntForProg();
  const progression = [startProg];
  for (let i = 0; progression.length < 10; i += 1) {
    progression.push(progression[i] + stepOfProg);
  }
  return progression;
};

export default async () => {
  const result = getProgression();
  const randomIndx = getIntForProg();
  const correctAnswer = result[randomIndx];
  result[randomIndx] = '..';
  const currentRound = result.join(' ');
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  return checkAnswer(userAnswer, correctAnswer);
};
