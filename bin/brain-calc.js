#!/usr/bin/env node
import playGame from '../src/index.js';
import calc, { task } from '../games/calc.js';

playGame(task, calc);
