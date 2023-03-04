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
        // I want to go back to this step for better comprehension.
        return isEven(n - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-6));
console.log(isEven(-7));

// Bean Counting

// first step
// function countBs(string) {
//     let count = 0;
//     for (let x = 0; x < string.length - 1; x++) {
//         if (string[x] === 'B') {
//             count += 1;
//         } else {
//             count;
//         }
//     }
//     return count;
// }

// second step
function countBs(string) {
    return countChar(string, 'B');
}

function countChar(string, char) {
    let count = 0;
    // why not string.length - 1?
    for (let x = 0; x < string.length; x++) {
        if (string[x] === char) {
            count += 1;
            //else statement is unnecessary
        } else {
            count;
        }
    }
    return count;
}

console.log(countBs('BaBBoboo', 'B'));
