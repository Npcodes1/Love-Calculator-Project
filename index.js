prompt("What is your name?");

prompt("What is your crush's name?");

let loveScore = Math.random() * 100;

loveScore = Math.floor(loveScore) + 1;

if (loveScore < 100 && loveScore >= 75) {
    alert ("Your Love Score is " + loveScore + "%" + ". You two are made for each other!");
} 

if (loveScore < 75 && loveScore >= 50) {
    alert ("Your Love Score is " + loveScore + "%" + ". Your love can go either way. The choice is yours.");
}

if (loveScore < 50 && loveScore >=1) {
    alert ("Your Love Score is " + loveScore + "%" + ". You might want to rethink this love. Run away now!");
}
