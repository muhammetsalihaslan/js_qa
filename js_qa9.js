//** program to find the sum of positive numbers if the user enters a negative numbers, the loop ends the negative number entered is not added to sum

let number = parseInt(prompt('Enter a number;'));
let sum = 0;

while(number > 0) {
    sum += number;
    number = parseInt(prompt('Please Enter a number;'))
    
}
console.log(sum);