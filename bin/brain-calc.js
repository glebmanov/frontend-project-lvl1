#!/usr/bin/env node
import playGame from '../src/index.js';
import { task, calc } from '../games/calc.js';

playGame(task, calc);
