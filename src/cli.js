/* eslint-disable no-restricted-syntax */
import promptly from 'promptly';

export const getName = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const isEvenGame = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  (async () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const randomNum = getRandomInt(23);
      console.log(`Question: ${randomNum}`);
      const userAnswer = await promptly.prompt('Your answer: ');
      const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  })();
};
