#!/usr/bin/env node
import playGame from '../src/index.js';
import prime, { task } from '../games/prime.js';

playGame(task, prime);
