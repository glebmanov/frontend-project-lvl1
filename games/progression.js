import { getIntForProg, getProgression } from '../src/cli.js';
import { round } from '../src/index.js';

export default async () => {
  const progression = getProgression();
  const randomIndx = getIntForProg();
  const correctAnswer = progression[randomIndx];
  progression[randomIndx] = '..';
  const currentRound = progression.join(' ');
  return round(currentRound, correctAnswer);
};
