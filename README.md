# @mdgfox/array-extensions [![npm version](https://badge.fury.io/js/@mdgfox%2Farray-extensions.svg)](https://www.npmjs.com/package/@mdgfox/array-extensions)

Lightweight TypeScript extensions for the Array prototype. Adds `shuffle`, `random`, and `randomDeepCopy` methods. 

## Installation

```bash
npm install @mdgfox/array-extensions
```

## Usage
Import the package once at the entry point of your application to extend the global Array interface:
```ts
import '@mdgfox/array-extensions';
```
Then you can simply use it next way
```ts
const arr = [1, 2, 3, 4, 5];
// shuffle
console.log(arr.shuffle());         
// Get random element
console.log(arr.random());          
// Get random element (cloned copy)
console.log(arr.randomDeepCopy());
```

## API

### `.shuffle(): T[]`
Shuffles the array in place using the Fisher–Yates algorithm. Returns the same array instance for chaining.

### `.random(): T | undefined`
Returns a random element from the array by reference. Returns `undefined` if empty.

### `.randomDeepCopy(): T | undefined`
Returns a deep-cloned copy of a random element using `structuredClone` (with a JSON fallback).

## License
[MIT](LICENSE)
