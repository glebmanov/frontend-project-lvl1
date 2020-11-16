#!/usr/bin/env node
import playGame from '../src/index.js';
import calc from '../games/calc.js';

const task = 'What is the result of the expression?';

playGame(task, calc);
