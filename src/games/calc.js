import getRandomInt from '../utils.js';
import play, { playRound } from '../index.js';

const task = 'What is the result of the expression?';

const countExpression = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  return result;
};

const playGame = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const currentRound = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = countExpression(num1, num2, randomOperator);
  const expectedAnswer = correctAnswer.toString();
  return playRound(currentRound, expectedAnswer);
};

export default () => play(task, playGame);
