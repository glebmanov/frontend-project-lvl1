import promptly from 'promptly';
import { getRandomInt } from '../src/index.js';

export default async () => {
  const currentRound = getRandomInt();
  console.log(`Question: ${currentRound}`);
  const userAnswer = await promptly.prompt('Your answer: ');
  const correctAnswer = currentRound % 2 === 0 ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
