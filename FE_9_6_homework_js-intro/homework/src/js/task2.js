const lengthA = +prompt('Input the first side of triangle:');
const lengthB = +prompt('Input the second side of triangle:');
const angle = +prompt('Input the angle:');
const maxAngle = 180;
const aHalf = 0.5;
const angleRad = angle * Math.PI / maxAngle;
const lengthC = Math.sqrt(lengthA * lengthA + lengthB * lengthB - 2 * lengthA * lengthB * Math.cos(angleRad));
const triangleSquare = aHalf * lengthA * lengthB * Math.sin(angleRad);
const trianglePerimeter = +lengthA + lengthB + lengthC;
if (lengthA <= 0 || lengthB <= 0 || angle >= maxAngle || angle <= 0) {
    console.error('Invalid data');
} else {
    console.log('For input data ' + lengthA + '(a length), ' + lengthB + '(b length), ' + angle + '(α-angle):\n' +
        '\tc length: ' + Number(lengthC.toFixed(2)) + '\n' +
        '\tTriangle square: ' + Number(triangleSquare.toFixed(2)) + '\n' +
        '\tTriangle perimeter: ' + Number(trianglePerimeter.toFixed(2)));
}
