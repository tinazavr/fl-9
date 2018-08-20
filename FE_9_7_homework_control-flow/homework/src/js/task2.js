const firstPrize = 10;
const secondPrize = 5;
const thirdPrize = 2;
let range = 5;
let prizes = [firstPrize, secondPrize, thirdPrize];
let totalPrize = 0;
if (!confirm(`Do you want to play a game?`)) {
    alert(`You did not become a millionaire, but can.`);
} else {
    game();
}

function game() {
    const secretNumber = Math.floor(Math.random() * range);
    console.log(secretNumber);
    for (let i = 0; i < 3; i++) {
        const number = +prompt(`Enter a number from 0 to ${range}
                                Attempts left: ${3 - i}
                                Total prize: ${totalPrize}$
                                Possible prize on current attempt: ${prizes[i]}$`);
        if (number === secretNumber) {
            totalPrize = totalPrize + prizes[i];
            alert(`Congratulation! Your prize is ${totalPrize}$`);
            if (confirm(`Do you want to play a game again?`)) {
                range = range * 2;
                prizes = prizes.map(function (prize) {
                    return prize * 3
                });
                prizes[2]++;
                game();
            }
            return;
        }
    }
    alert(`Thank you for a game. Your prize is: ${totalPrize}`);
}

