#!/usr/bin/env node
import playGame from '../src/index.js';
import prime, { task } from '../src/games/prime.js';

playGame(task, prime);
