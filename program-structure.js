// Looping a Triangle
for (let result = '#'; result.length < 8; result += '#') {
    console.log(result);
}

// FizzBuzz
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// Chessboard
const chessBoard = ' # # # # \n hi';
console.log(chessBoard);
