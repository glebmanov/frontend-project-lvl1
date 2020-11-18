import { getRandomInt } from '../src/cli.js';
import { round } from '../src/index.js';

export default async () => {
  const currentRound = getRandomInt();
  const correctAnswer = currentRound % 2 === 0 ? 'yes' : 'no';
  return round(currentRound, correctAnswer);
};
