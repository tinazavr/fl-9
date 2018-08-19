const price = prompt('Input amount of money:');
const discount = prompt('Input the discount:');
const saved = price * discount / 100;
const priceWithDiscount = price - saved;

if(price < 0 || discount > 100 || discount < 0){
    console.error('Invalid data');
} else {
    console.log('For input data ' + price + '(price) and ' + discount + '(discount):\n' +
        '\tPrice without discount: ' + price + '\n' +
        '\tDiscount: ' + discount + '\n' +
        '\tPrice with discount: ' + Number(priceWithDiscount.toFixed(2)) + '\n' +
        '\tSaved: ' + Number(saved.toFixed(2)));
}
