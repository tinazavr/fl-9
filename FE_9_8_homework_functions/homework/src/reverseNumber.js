function reverseNumber(number) {
    let negative = false;
    if (number < 0) {
        negative = true;
    }
    const reversed = +Math.abs(number).toString().split('').reverse().join('');

    if (negative) {
        return -reversed;
    }
    return reversed;
}