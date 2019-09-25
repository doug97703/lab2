'use strict';
// var userName = prompt('please give me your name')
// console.log('hello ' + userName + ' , I hope your day is going well.')
// var skyIsBlue = prompt('quick question - is the sky blue?')
// if (skyIsBlue.toLowerCase() === 'yes' || skyIsBlue.toLowerCase() === 'y'){
//     console.log('hmm that sounds right to me!');
// }
// else{
//     console.log("that's an interesting response, which planet are you from?")
// }

// var romeCapital = prompt('did Rome become the capital of a united Italian state in 1867?')
// if (romeCapital.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
//     console.log('correct! It was 1870. That\'s quite the trivia you know. You would be good on Jeopardy.');
// }
// else {
//     console.log("actually, it wasn't until a plebiscite in October 1870 that Rome became the capital of a united Italy.")
// }

// var congressAge = prompt('help me remember. What|\'s the required age for a federal congressperson in the United States? Is it 35?')
// if (congressAge.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
//     console.log('I think you\'re right. It\'s 25.');
// }
// else {
//     console.log('no, i think it\'s 25, actually.');
// }

// var airConditionerYear = prompt('when Charles Gates installed the first ever in-home air conditioner, what year was it? 1914?')
// if (congressAge.toLowerCase() === 'yes' || skyIsBlue.toLowerCase() === 'y') {
//     console.log('that\'s right. he must have been super rich!');
// }
// else {
//     console.log('nope, it actually was 1914.');
//


var number = 47;
var numberGuess = 0;
var attempt = 1;

do {
    var numberGuess = prompt("please guess a number, any number");
    if (number == numberGuess) {
        alert('hey that is the number i was thinking of!');
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



// for(var i = 0; i = 5; i++) {
//     var vehicleGuess = prompt('what is a type of vehicle?');
//     var z = 0;
//     while (z<answerArray.length) {
//         var answerCorrect = false
//         if (vehicleGuess.toLowerCase === answerArray[z]){
//             alert('yep, that is a correct answer');
//             z = answerArray.length;
//             answerCorrect = true;
//             break;
//         }
//         else {
//             z+=1;
//         }
//     }
//     if (answerCorrect === false){
//         alert('that answer is not correct, try again.')
//     }

// }

// var answerArray = ['sedan', 'truck', 'car', 'suv', 'van'];
// var x = 0;
// while (x < answerArray.length) {
//     alert(answerArray[x]);
//     x += 1;
// }