import promptly from 'promptly';
import { getRandomInt } from '../src/cli.js';
import { checkAnswer } from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let divisor = 2; divisor < num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default async () => {
  const currentRound = getRandomInt();
  console.log(`Question: ${currentRound}`);
  const userAnswer = await promptly.prompt('Your answer: ');
  const correctAnswer = isPrime(currentRound);
  return checkAnswer(userAnswer, correctAnswer);
};
