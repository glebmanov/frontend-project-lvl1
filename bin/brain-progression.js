#!/usr/bin/env node
import playGame from '../src/index.js';
import progression, { task } from '../games/progression.js';

playGame(task, progression);
