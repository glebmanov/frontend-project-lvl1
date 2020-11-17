#!/usr/bin/env node
import playGame from '../src/index.js';
import progression from '../games/progression.js';

const task = 'What number is missing in the progression?';

playGame(task, progression);
