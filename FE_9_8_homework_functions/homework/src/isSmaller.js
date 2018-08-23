// Your code goes here
function isSmaller(firstNumber, secondNumber) {
    return !isBigger(firstNumber, secondNumber) && firstNumber !== secondNumber;
}

console.log(isSmaller(5, 1), isSmaller(1, 5), isSmaller(1, 1));