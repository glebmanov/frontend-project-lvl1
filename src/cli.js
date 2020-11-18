import promptly from 'promptly';

export const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
export const getRandomIndx = () => Math.floor(Math.random() * (3 - 0)) + 0;
export const getIntForProg = () => Math.floor(Math.random() * (10 - 1)) + 1;

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
