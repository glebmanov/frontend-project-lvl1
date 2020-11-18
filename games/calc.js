import { getRandomInt, getRandomIndx, expression } from '../src/cli.js';
import { round } from '../src/index.js';

export default async () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomIndx()];
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const currentRound = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = expression(num1, num2, randomOperator);
  return round(currentRound, correctAnswer);
};
