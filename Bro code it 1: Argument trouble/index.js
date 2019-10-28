/*
Task

Write a sum method which will work properly when invoked using either syntax below:

sum(2,3);   // Outputs 5
sum(2)(3);  // Outputs 5
*/

// 1
const sum1 = (x, y) => (y != undefined ? x + y : y => y + x);

// 2
function add(a, b) {
    return a + b;
}

function carry(fn) {
    return function inner(...args) {
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        }

        return function(...args2) {
            return inner.apply(null, [...args, ...args2]);
        };
    };
}

const sum2 = carry(add);

// 3
function originalSum(a, b) {
    return a + b;
}

const curry = fn => {
    let inner = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...args2) => inner(...args.concat(args2));
    return inner;
};

const sum = curry(originalSum);
