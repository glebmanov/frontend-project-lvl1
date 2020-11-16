import gretting from './cli.js';

export const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
export const getRandomIndx = () => Math.floor(Math.random() * (3 - 0)) + 0;

export default async (task, game) => {
  const name = await gretting();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const result = await game();
    if (result === false) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
