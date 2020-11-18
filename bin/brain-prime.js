#!/usr/bin/env node
import playGame from '../src/index.js';
import prime from '../games/prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playGame(task, prime);
