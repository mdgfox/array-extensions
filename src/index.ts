declare global {
    interface Array<T> {
        /**
         * Returns a deep copy of a random element from the array.
         */
        randomDeepCopy(): T | undefined;
        /**
         * Returns a random element from the array.
         */
        random(): T | undefined;
        /**
         * Shuffles the array in place using the Fisher–Yates algorithm.
         */
        shuffle(): T[];
    }
}

Array.prototype.randomDeepCopy = function <T>(this: T[]): T | undefined {
    if (this.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * this.length);
    const item = this[randomIndex];

    if (typeof structuredClone === 'function') {
        return structuredClone(item);
    } else {
        return JSON.parse(JSON.stringify(item)); // Fallback deep copy
    }
};

Array.prototype.random = function <T>(): T | undefined {
    if (this.length === 0) return undefined;
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function <T>(this: T[]): T[] {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

export { };
