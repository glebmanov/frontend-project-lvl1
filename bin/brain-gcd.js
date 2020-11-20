#!/usr/bin/env node
import playGame from '../src/index.js';
import { task, gcd } from '../games/gcd.js';

playGame(task, gcd);
