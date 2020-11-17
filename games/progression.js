import promptly from 'promptly';
import { getIntToProg } from '../src/index.js';

const getProgression = () => {
  const startProg = getIntToProg();
  const stepOfProg = getIntToProg();
  const progression = [startProg];
  for (let i = 0; progression.length < 10; i += 1) {
    progression.push(progression[i] + stepOfProg);
  }
  return progression;
};

export default async () => {
  const result = getProgression();
  const randomIndx = getIntToProg();
  const correctAnswer = result[randomIndx];
  result[randomIndx] = '..';
  const currentRound = result.join(' ');
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
