import promptly from 'promptly';
import { getRandomInt, getRandomIndx } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

const operators = ['+', '-', '*'];
const expression = (num1, num2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    // no default
  }
  return result;
};

export default async () => {
  const randomOperator = operators[getRandomIndx()];
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const currentRound = `${num1} ${randomOperator} ${num2}`;
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  const correctAnswer = expression(num1, num2, randomOperator);
  return checkAnswer(userAnswer, correctAnswer);
};
