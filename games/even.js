import promptly from 'promptly';
import { getRandomInt } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

export default async () => {
  const currentRound = getRandomInt();
  console.log(`Question: ${currentRound}`);
  const userAnswer = await promptly.prompt('Your answer: ');
  const correctAnswer = currentRound % 2 === 0 ? 'yes' : 'no';
  return checkAnswer(userAnswer, correctAnswer);
};
