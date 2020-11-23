#!/usr/bin/env node
import playGame from '../src/index.js';
import progression, { task } from '../src/games/progression.js';

playGame(task, progression);
