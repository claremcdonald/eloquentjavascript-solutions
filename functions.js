// Minimum
function min(x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}

console.log(min(5, 6));
console.log(min(9, -1));

// Recursion
function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-6));
console.log(isEven(-7));
