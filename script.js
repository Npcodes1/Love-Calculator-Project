
function calculate() {
    
    let loveScore = Math.random() * 100;

    loveScore = Math.floor(loveScore) + 1;

    if (loveScore <= 100 && loveScore >= 80) {
    document.getElementById('message').innerHTML = "Your Love Score is " + loveScore + "%" + ". You two are made for each other!";
} 

    if (loveScore <= 79 && loveScore >= 59) {
    document.getElementById('message').innerHTML = "Your Love Score is " + loveScore + "%" + ". Your love can go either way. The choice is yours.";
}

    if (loveScore <= 58 && loveScore >= 38) {
    document.getElementById('message').innerHTML = "Your Love Score is " + loveScore + "%" + ". Your love's not looking too hot.";
}

    if (loveScore <=37 && loveScore >=1) {
    document.getElementById('message').innerHTML = "Your Love Score is " + loveScore + "%" + ". You might want to rethink this love. Run away now!";
}

}

function reload() {
    window.location.reload();
}