import readlineSync from 'readline-sync';
import gretting from './cli.js';
import { isNumber, isString } from './utils.js';

const expectedAnswerType = (userAnswer, correctAnswer) => {
  let result;
  if (isNumber(correctAnswer)) {
    result = Number(userAnswer);
  } else if (isString(correctAnswer)) {
    result = userAnswer.toString();
  }
  return result;
};

export const round = (currentRound, correctAnswer) => {
  console.log(`Question: ${currentRound}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctUserAnswer = expectedAnswerType(userAnswer, correctAnswer);
  if (correctUserAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  return console.log('Correct!');
};

export default (task, game) => {
  const name = gretting();
  console.log(task);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const result = game();
    if (result === false) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
