let max;
let min;
let guess;

function startGame(){
    max = document.getElementById('max').value;
    min = document.getElementById('min').value;
    console.log(min);
    console.log(Math.trunc(min));

    //check min, max entered correctly
    if (min === '' || max === '') {
        document.getElementById('guess').innerHTML = 'Enter a Min and Max, then click Start.';
    } else if (1*min !== Math.trunc(min) || 1*max !== Math.trunc(max) || 1*max <= 1*min){
        document.getElementById('guess').innerHTML = 'Invalid Min or Max. Integers only. Max must be greater than Min.';
    } else {
        //initialize min, max, guess
        max = 1*document.getElementById('max').value;
        min = 1*document.getElementById('min').value;
        console.log(`initial: ${min},${max}`);

        updateGuess();
        document.getElementById('start').innerHTML = 'Restart';
    }

}


function updateGuess(){
    guess = Math.floor(Math.random()*(max+1-min)+min);
    console.log(`new guess: ${guess}`);
    document.getElementById('guess').innerHTML = `Is your number ${guess}?`;
    //console.log(min,max);
}

function lower(){
    if (guess === undefined){
        document.getElementById('guess').innerHTML = 'Enter a Min and Max, then click Start.';
    } else if (guess === min) {
        document.getElementById('guess').innerHTML = "Don't try to fool us.";
    } else {
        max = guess-1;
        //new max should be -1 lower than prev guess, to avoid repeating prev guess
        updateGuess();
        console.log(`new max: ${max}`);
    }
        
}

function higher(){
    if (guess === undefined){
        document.getElementById('guess').innerHTML = 'Enter a Min and Max, then click Start.';
    } else if (guess === max) {
        document.getElementById('guess').innerHTML = "Don't try to fool us.";
    } else {
        min = guess+1;
        //new min should be +1 higher than prev guess, to avoid repeating prev guess
        updateGuess();
        console.log(`new min: ${min}`);
    }
}

function correct(){
    if (guess === undefined){
        document.getElementById('guess').innerHTML = 'Enter a Min and Max, then click Start.';
    } else {
        document.getElementById('guess').innerHTML = `Of course, we always knew your number is ${guess}! Play again?`;
    }
}