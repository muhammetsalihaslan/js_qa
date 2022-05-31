//** program to find the sum of positive numbers if the user enters a negative numbers, the loop ends the negative number entered is not added to sum

let number = parseInt(prompt('Enter a number;'));
let sum = 0;

while(number > 0) {
    sum += number;
    number = parseInt(prompt('Please Enter a number;'))
    
}
console.log(sum);

//****do while *************/

let i = 1;
const n = 5;

do {
    console.log(i);
    i++;
} while(i <= n);

//?sum of positive number with do while solution

let number = parseInt(prompt('Enter a number'))
let sum = 0;

do {
    sum += number;
    number = parseInt(prompt('Please Enter a number'))
} while(number > 0);
console.log(sum);

//** if i want to flash answer i should use this code  */

let number = parseInt(prompt('Enter a number'))
let sum = 0;

do {
    sum += number;
    console.log(sum);
    number = parseInt(prompt('Please Enter a number'))
} while(number > 0);

//*******break statement********/

let number1;
let sum1 = 0;

while(true) {
    number1 = parseInt(prompt('Enter a number'));
    if(number1 < 0){
        break;
    }

    sum1 += number1
}
console.log(`the sum is ${sum}`);

