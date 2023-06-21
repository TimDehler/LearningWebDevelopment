import * as importedStuff from "./export.js";
console.log(importedStuff.name);

import { name } from "./export.js";
console.log(name);

import { year, state } from "./export.js";
console.log(year, state);

import greet from "./export.js";
greet();

import { greet as altName } from "./export.js";
altName(); // Still executes imported function greet
