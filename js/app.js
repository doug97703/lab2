'use strict';
var numberCorrect = 0;

var userName = prompt('please give me your name')
alert('hello ' + userName + ' , I hope your day is going well.')
var skyIsBlue = prompt('quick question - is the sky blue?')
if (skyIsBlue.toLowerCase() === 'yes' || skyIsBlue.toLowerCase() === 'y'){
    alert('hmm that sounds right to me!');
    numberCorrect += 1;
}
else{
    alert("that's an interesting response, which planet are you from?")
}

var romeCapital = prompt('did Rome become the capital of a united Italian state in 1867?')
if (romeCapital.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
    alert('correct! It was 1870. That\'s quite the trivia you know. You would be good on Jeopardy.');
    numberCorrect += 1;
}
else {
    alert("actually, it wasn't until a plebiscite in October 1870 that Rome became the capital of a united Italy.")
}

var congressAge = prompt('help me remember. What|\'s the required age for a federal congressperson in the United States? Is it 35?')
if (congressAge.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
    alert('I think you\'re right. It\'s 25.');
    numberCorrect += 1;
}
else {
    alert('no, i think it\'s 25, actually.');
}

var airConditionerYear = prompt('when Charles Gates installed the first ever in-home air conditioner, what year was it? 1913?')
if (congressAge.toLowerCase() === 'yes' || skyIsBlue.toLowerCase() === 'y') {
    alert('that\'s right. he must have been super rich!');
    numberCorrect += 1;
}
else {
    alert('nope, it actually was 1914.');
}



var number = 47;
var numberGuess = 0;
var attempt = 1;

do {
    var numberGuess = prompt("please guess a number, any number");
    if (number == numberGuess) {
        alert('hey that is the number i was thinking of!');
        numberCorrect += 1;
        break;
    }
    else if (numberGuess > number) {
        alert('that number is too high. guess again.');
        attempt += 1;
    }
    else if (numberGuess < number) {
        alert('that number is too low.');
        alert('that was guess number ' + attempt)
        attempt += 1;
    }
} while (attempt<=4);


var attempt = 0
do {
    var vehicleGuess = prompt('what is a type of vehicle?');
    var z = 0
    var answerArray = ['sedan', 'truck', 'car', 'suv', 'van'];
    while (z < answerArray.length) {
        if (vehicleGuess == answerArray[z]) {
            alert('that answer is correct')
            numberCorrect += 1;
            var correctAnswer = true;
            break;
        }
        else {
            z += 1;
        }
    }
    if (!correctAnswer) {
        attempt++;
        alert('c\'mon, that\'s not a vehicle. that was guess number ' + attempt);
    }
    else if (correctAnswer){
        break;
    }
} while (attempt < 6);

alert('your total number of correct answers was ' + numberCorrect)
