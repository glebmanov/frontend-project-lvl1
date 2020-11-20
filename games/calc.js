import getRandomInt from '../src/utils.js';
import { round } from '../src/index.js';

export const task = 'What is the result of the expression?';

const expression = (num1, num2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${randomOperator}`);
  }
  return result;
};

export default async () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, 2)];
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const currentRound = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = expression(num1, num2, randomOperator);
  return round(currentRound, correctAnswer);
};
