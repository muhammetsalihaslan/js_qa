//? Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

const number1 = parseInt(prompt("please enter a number"))

const number2 = 13;

if (number1 < number2) {
    console.log((number2-number1)*2);
} else {
    console.log(number1-number2)
}

//! solution 2

function difference(n)
 {
    if (n >= 13)
        return n-13;
    else
        return (13-n) * 2;
 }
console.log(difference(number1));

