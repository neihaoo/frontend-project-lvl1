#!/usr/bin/env node

import { greeting, getUserName } from '..';

console.log(greeting());
console.log(`Hello, ${getUserName()}!`);
