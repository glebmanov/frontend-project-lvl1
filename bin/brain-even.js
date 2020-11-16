#!/usr/bin/env node
import playGame from '../src/index.js';
import even from '../games/even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

playGame(task, even);
