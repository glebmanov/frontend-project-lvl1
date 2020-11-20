export default (first, last) => Math.floor(Math.random() * (last - first + 1)) + first;

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

export const isNumber = (value) => typeof value === 'number';

export const isString = (value) => typeof value === 'string';
