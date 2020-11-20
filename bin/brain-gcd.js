#!/usr/bin/env node
import playGame from '../src/index.js';
import gcd, { task } from '../games/gcd.js';

playGame(task, gcd);
