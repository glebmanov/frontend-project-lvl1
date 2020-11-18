import promptly from 'promptly';

export const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
export const getRandomIndx = () => Math.floor(Math.random() * (3 - 0)) + 0;
export const getIntForProg = () => Math.floor(Math.random() * (10 - 1)) + 1;

export const expression = (num1, num2, randomOperator) => {
  let result;
  switch (randomOperator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    // no default
  }
  return result;
};

export const gcd = (num1, num2) => {
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

export const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let divisor = 1; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const getProgression = () => {
  const startProg = getIntForProg();
  const stepOfProg = getIntForProg();
  const result = [startProg];
  const progressionLength = 10;
  for (let i = 0; result.length < progressionLength; i += 1) {
    result.push(result[i] + stepOfProg);
  }
  return result;
};

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
