import readlineSync from 'readline-sync';
import gretting from './cli.js';

export const round = (currentRound, correctAnswer) => {
  console.log(`Question: ${currentRound}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = correctAnswer.toString();
  if (userAnswer !== expectedAnswer) {
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
