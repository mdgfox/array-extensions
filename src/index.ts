declare global {
    interface Array<T> {
        chunk(size: number): T[][];
        compact(): Exclude<T, null | undefined>[];
        move(from: number, to: number): T[];
        partition(predicate: (item: T, index: number, array: T[]) => boolean): [T[], T[]];
        randomDeepCopy(): T | undefined;
        random(): T | undefined;
        shuffle(): T[];
        unique(): T[];
        uniqueBy<K extends keyof T>(key: K): T[];
    }
}

const define = (name: keyof Array<any>, fn: Function) => {
    if (!Array.prototype[name]) {
        Object.defineProperty(Array.prototype, name, {
            value: fn,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }
};

define('chunk', function <T>(this: T[], size: number): T[][] {
    if (!Number.isInteger(size) || size < 1) return [];
    const result: T[][] = [];
    for (let i = 0; i < this.length; i += size) {
        result.push(this.slice(i, i + size));
    }
    return result;
});

define('compact', function <T>(this: T[]): Exclude<T, null | undefined>[] {
    return this.filter(item => item !== null && item !== undefined) as Exclude<T, null | undefined>[];
});

define('move', function <T>(this: T[], from: number, to: number): T[] {
    const start = from < 0 ? this.length + from : from;
    const end = to < 0 ? this.length + to : to;
    if (start < 0 || start >= this.length || end < 0 || end >= this.length) return this;
    const [item] = this.splice(start, 1);
    this.splice(end, 0, item);
    return this;
});

define('partition', function <T>(this: T[], predicate: (item: T, index: number, array: T[]) => boolean): [T[], T[]] {
    const matched: T[] = [];
    const rest: T[] = [];
    this.forEach((item, index) => {
        (predicate(item, index, this) ? matched : rest).push(item);
    });
    return [matched, rest];
});

define('randomDeepCopy', function <T>(this: T[]): T | undefined {
    if (this.length === 0) return undefined;
    const item = this[Math.floor(Math.random() * this.length)];
    return typeof structuredClone === 'function' ? structuredClone(item) : JSON.parse(JSON.stringify(item));
});

define('random', function <T>(this: T[]): T | undefined {
    return this.length === 0 ? undefined : this[Math.floor(Math.random() * this.length)];
});

define('shuffle', function <T>(this: T[]): T[] {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
});

define('unique', function <T>(this: T[]): T[] {
    return [...new Set(this)];
});

define('uniqueBy', function <T, K extends keyof T>(this: T[], key: K): T[] {
    const seen = new Set<T[K]>();
    return this.filter(item => {
        const val = item[key];
        if (seen.has(val)) return false;
        seen.add(val);
        return true;
    });
});

export { };
