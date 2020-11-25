import readlineSync from 'readline-sync';

export default (task, getGameParameters) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const parameters = getGameParameters();
    const currentRound = parameters[0];
    const expectedAnswer = parameters[1];
    console.log(`Question: ${currentRound}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
