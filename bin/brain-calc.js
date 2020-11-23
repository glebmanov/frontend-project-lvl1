#!/usr/bin/env node
import playGame from '../src/index.js';
import calc, { task } from '../src/games/calc.js';

playGame(task, calc);
