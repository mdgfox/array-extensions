# @mdgfox/array-extensions [![npm version](https://badge.fury.io/js/@mdgfox%2Farray-extensions.svg)](https://www.npmjs.com/package/@mdgfox/array-extensions) [![npm downloads](https://img.shields.io/npm/dt/%40mdgfox%2Farray-extensions)](https://www.npmjs.com/package/@mdgfox/array-extensions)

Lightweight TypeScript extensions for the Array prototype. Adds powerful utility methods for everyday array manipulation.

## Installation

```bash
npm install @mdgfox/array-extensions
```

## Usage
Import the package once at the entry point of your application to extend the global Array interface:
```ts
import '@mdgfox/array-extensions';
```
## Examples
```ts
const arr = [1, 2, 3, 4, 5];
// shuffle
console.log(arr.shuffle());         
// Get random element
console.log(arr.random());          
// Get random element (cloned copy)
console.log(arr.randomDeepCopy());
```
```ts
// Move elements
const arr = ['a', 'b', 'c'];
arr.move(0, 2); // ['b', 'c', 'a']
```
```ts
// Cleanup
const data = [1, null, 0, undefined, 2];
data.compact(); // [1, 0, 2]
```
```ts
// Unique objects
const items = [{id: 1}, {id: 2}, {id: 1}];
items.uniqueBy('id'); // [{id: 1}, {id: 2}]
```

## API

### .shuffle(): T[]
Shuffles the array in place using the Fisher–Yates algorithm. Returns the instance for chaining.

### .random(): T | undefined
Returns a random element from the array by reference. Returns undefined if empty.

### .randomDeepCopy(): T | undefined
Returns a deep-cloned copy of a random element using structuredClone (with a JSON fallback).

### .move(from: number, to: number): T[]
Moves an element from one index to another in place. Supports negative indices.

### .compact(): T[]
Returns a new array with all null and undefined values removed. (Preserves 0, false, and "").

### .unique(): T[]
Returns a new array containing only unique elements (removes duplicates).

### .uniqueBy<K extends keyof T>(key: K): T[]
Returns a new array containing unique elements based on a specific object key. Useful for de-duplicating arrays of objects.

## Technical Details
This library extends the global `Array.prototype` using `Object.defineProperty`. 

* **Enumerable:** All added methods are set to `enumerable: false`. This ensures that they do not appear in `for...in` loops or `Object.keys()` calls, keeping your arrays "clean" and behaving exactly like native JavaScript methods.
* **Safety:** The library checks for the existence of a method before adding it, ensuring compatibility with future ECMAScript standards and other libraries.
* **TypeScript:** Full type support is included via `declare global`.

## License
[MIT](LICENSE)
