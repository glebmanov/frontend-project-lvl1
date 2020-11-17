import promptly from 'promptly';
import { getRandomInt } from '../src/cli.js';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export default async () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const currentRound = `${num1} ${num2}`;
  console.log(`Question: ${currentRound}`);
  const userAnswer = Number(await promptly.prompt('Your answer: '));
  const correctAnswer = gcd(num1, num2);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
