#!/usr/bin/env node

import { welcome, greeting, evenGame as startGame } from '..';

console.log(welcome());
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
console.log(startGame(greeting()));
