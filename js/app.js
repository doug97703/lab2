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
