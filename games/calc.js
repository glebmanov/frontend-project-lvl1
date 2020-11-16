import promptly from 'promptly';
import { getRandomInt, getRandomIndx } from '../src/index.js';

const operator = ['+', '-', '*'];

export default async () => {
  const randomOperator = operator[getRandomIndx()];
  const currentRound = `${getRandomInt()} ${randomOperator} ${getRandomInt()}`;
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  const correctAnswer = eval(currentRound);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
