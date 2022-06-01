//? program to calculate positive numbers only
//? if the user enters a negative number, that number is skipped from calculation

//? negative number -> loop terminate
//? non-numeric character -> skip iteration

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