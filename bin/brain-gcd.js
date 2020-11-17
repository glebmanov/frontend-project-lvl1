#!/usr/bin/env node
import playGame from '../src/index.js';
import gcd from '../games/gcd.js';

const task = 'Find the greatest common divisor of given numbers.';

playGame(task, gcd);
