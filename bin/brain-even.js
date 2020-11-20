#!/usr/bin/env node
import playGame from '../src/index.js';
import even, { task } from '../games/even.js';

playGame(task, even);
