import readlineSync from 'readline-sync';

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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
