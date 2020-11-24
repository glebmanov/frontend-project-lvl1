import readlineSync from 'readline-sync';

export const playRound = (currentRound, expectedAnswer) => {
  console.log(`Question: ${currentRound}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== expectedAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    return false;
  }
  return console.log('Correct!');
};

export default (task, playGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const result = playGame();
    if (result === false) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
