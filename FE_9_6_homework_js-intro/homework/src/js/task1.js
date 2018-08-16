// Your code goes here
const price = prompt("Input amount of money:");
const discount = prompt("Input the discount:");
const saved = price * discount / 100;
const priceWithDiscount = price - saved;

if(price < 0 || discount > 100 || discount < 0){
    console.error("Invalid data");
} else {
    console.log("For input data " + price + "(price) and " + discount + "(discount):\n" +
        "\tPrice without discount: " + price + "\n" +
        "\tDiscount: " + discount + "\n" +
        "\tPrice with discount: " + Number(priceWithDiscount.toFixed(2)) + "\n" +
        "\tSaved: " + Number(saved.toFixed(2)));
}


// Price without discount: 4950
// Discount: 30%
// Price with discount: 3465
// Saved:  1485