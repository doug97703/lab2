'use strict';



var userName = prompt('please give me your name')
console.log('hello ' + userName + ' , I hope your day is going well.')
var skyIsBlue = prompt('quick question - is the sky blue?')
if (skyIsBlue.toLowerCase() === 'yes' || skyIsBlue.toLowerCase() === 'y'){
    console.log('hmm that sounds right to me!');
}
else{
    console.log("that's an interesting response, which planet are you from?")
}

var romeCapital = prompt('did Rome become the capital of a united Italian state in 1867?')
if (romeCapital.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
    console.log('correct! It was 1870. That\'s quite the trivia you know. You would be good on Jeopardy.');
}
else {
    console.log("actually, it wasn't until a plebiscite in October 1870 that Rome became the capital of a united Italy.")
}

var congressAge = prompt('help me remember. What|\'s the required age for a federal congressperson in the United States? Is it 35?')
if (congressAge.toLowerCase() === 'no' || skyIsBlue.toLowerCase() === 'n') {
    console.log('I think you\'re right. It\'s 25.');
}
else {
    console.log('no, i think it\'s 25, actually.');
}