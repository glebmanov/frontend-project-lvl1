import promptly from 'promptly';
import { getRandomInt, getRandomIndx } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

const operators = ['+', '-', '*'];

export default async () => {
  const randomOperator = operators[getRandomIndx()];
  const currentRound = `${getRandomInt()} ${randomOperator} ${getRandomInt()}`;
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  const correctAnswer = eval(currentRound);
  return checkAnswer(userAnswer, correctAnswer);
};
