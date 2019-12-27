if (confirm('Do you want to play a game?')) {
    const min = 0;
    let newGameMax = 4;
    let max = newGameMax;
    let userNum;
    const firstAttemptPrize = 100;
    const secondAttemptPrize = 50;
    const thirdAttemptPrize = 25;
    let prize = 0;
    let oneMoreGame = true;
    let newGameMultiplier = 0.5;
    let j = newGameMultiplier;
    const nextGameMultiplier = 2;
    const nextGameMaxAdd = 4;
    const attempts = 3;
    const two = 2; // row 65 eslint warning fix
    while (oneMoreGame === true) {
        j *= nextGameMultiplier;
        max += nextGameMaxAdd;
        let randomNum = Math.floor(Math.random() * (max + 1));
        for (let i = 0; i < attempts; i++) {
            if (i === 0) {
                userNum = parseInt(prompt('Choose a roulette pocket number from ' + 
                min + ' to ' + max + '\nAttempts left: 3\nTotal prize: ' + 
                prize + '$\nPossible prize on current attempt: ' + firstAttemptPrize * j + '$'));
                if (userNum === randomNum) {
                    prize += firstAttemptPrize * j;
                    if (confirm('Congratulation, you won! Your prize is: ' + prize + ' $. Do you want to continue?')) {
                        oneMoreGame = true;
                    } else {
                        alert('Thank you for your participation. Your prize is: ' + prize + ' $');
                        if (confirm('Do you want to play again?')) {
                            j = newGameMultiplier;
                            max = newGameMax;
                            prize = 0;
                            oneMoreGame = true;
                        } else {
                            oneMoreGame = false;
                        }
                    }
                    break;
                }
            } else if (i === 1) {
                userNum = parseInt(prompt('Choose a roulette pocket number from ' + 
                min + ' to ' + max + '\nAttempts left: 2\nTotal prize: ' + 
                prize + '$\nPossible prize on current attempt: ' + secondAttemptPrize * j + '$'));
                if (userNum === randomNum) {
                    prize += secondAttemptPrize * j;
                    if (confirm('Congratulation, you won! Your prize is: ' + prize + ' $. Do you want to continue?')) {
                        oneMoreGame = true;
                    } else {
                        alert('Thank you for your participation. Your prize is: ' + prize + ' $');
                        if (confirm('Do you want to play again?')) {
                            j = newGameMultiplier;
                            max = newGameMax;
                            prize = 0;
                            oneMoreGame = true;
                        } else {
                            oneMoreGame = false;
                        }
                    }
                    break;
                }
            } else if (i === two) {
                userNum = parseInt(prompt('Choose a roulette pocket number from ' + 
                min + ' to ' + max + '\nAttempts left: 1\nTotal prize: ' + 
                prize + '$\nPossible prize on current attempt: ' + thirdAttemptPrize * j + '$'));
                if (userNum === randomNum) {
                    prize += thirdAttemptPrize * j;
                    if (confirm('Congratulation, you won! Your prize is: ' + prize + ' $. Do you want to continue?')) {
                        oneMoreGame = true;
                    } else {
                        alert('Thank you for your participation. Your prize is: ' + prize + ' $');
                        if (confirm('Do you want to play again?')) {
                            j = newGameMultiplier;
                            max = newGameMax;
                            prize = 0;
                            oneMoreGame = true;
                        } else {
                            oneMoreGame = false;
                        }
                    }
                } else {
                    alert('Thank you for your participation. Your prize is: ' + prize + ' $');
                    if (confirm('Do you want to play again?')) {
						j = newGameMultiplier;
						max = newGameMax;
						prize = 0;
						oneMoreGame = true;
                    } else {
                        oneMoreGame = false;
                    }
                }
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}