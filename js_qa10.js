//? program to calculate positive numbers only
//? if the user enters a negative number, that number is skipped from calculation

//? negative number -> loop terminate
//? non-numeric character -> skip iteration
//! first solution
let number = 0;
let sum = 0;

while(true) {
    number = +prompt('please enter a number')
    if (number != number){
        continue;
    }
    if(number < 0){
        break;
    }
    sum += number;
}

console.log(`sum of number is ${sum}`);

//! second Solution

let number1 = 0;
let sum1 = 0;

while(number1 >= 0){
    sum1 += number1;

    number1 = parseInt(prompt('please enter a number'))

    if (isNaN(number1)){
        console.log("you entered a string");
        number1 = 0;
        continue;
    }
}
console.log(`the sum of number is ${sum1}`);

