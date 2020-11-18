import promptly from 'promptly';
import gretting from './cli.js';

export const round = async (currentRound, correctAnswer) => {
  console.log(`Question: ${currentRound}`);
  const userAnswer = await promptly.prompt('Your answer: ');
  const correctAnswerType = typeof correctAnswer === 'number' ? Number(userAnswer) : userAnswer;
  if (correctAnswerType !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  return console.log('Correct!');
};

export default async (task, game) => {
  const name = await gretting();
  console.log(task);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const result = await game();
    if (result === false) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
