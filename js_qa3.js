/*Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en
büyüğünü yazdıran programı yazınız.*/

//!Solution 1

const number1 = +prompt('Please Enter a number1');
const number2 = +prompt('Please Enter a number2');
const number3 = +prompt('Please Enter a number3');
const islem = prompt('Please Enter a operation');
let netice;
    if (number1 > number2 || number3, islem == "+") {
        netice = (`number1 is greater than number2 and number3 and sum of given number is:${number1}+${number2}+${number3} = ${number1 + number2 + number3}`);
    } else if(number1 > number2 || number3, islem == "-") {
        netice = (`number1 is greater than number2 and number3 and subtract of given number is:${number1}-${number2}-${number3} = ${number1 - number2 - number3}`);
    } else if(number1 > number2 || number3, islem == "*") {
        netice = (`number1 is greater than number2 and number3 and subtract of given number is:${number1}*${number2}*${number3} = ${number1 * number2 * number3}`);
    } else if (number2 > number1 || number3, islem == "+") {
        netice = (`number2 is greater than number1 and number3 and sum of given number is:${number2}+${number1}+${number3} = ${number1 + number2 + number3}`);
    } else if(number2 > number1 || number3, islem == "-") {
        netice = (`number2 is greater than number1 and number3 and subtract of given number is:${number1}-${number2}-${number3} = ${number1 - number2 - number3}`);
    } else if(number2 > number1 || number3, islem == "*") {
        netice = (`number2 is greater than number1 and number3 and subtract of given number is:${number1}*${number2}*${number3} = ${number1 * number2 * number3}`);
    } else if (number3 > number2 || number1, islem == "+") {
        netice = (`number3 is greater than number2 and number1 and sum of given number is:${number1}+${number2}+${number3} = ${number1 + number2 + number3}`);
    } else if(number3 > number2 || number1, islem == "-") {
        netice = (`number3 is greater than number2 and number1 and subtract of given number is:${number1}-${number2}-${number3} = ${number1 - number2 - number3}`);
    } else if(number3 > number2 || number1, islem == "*") {
        netice = (`number3 is greater than number2 and number1 and subtract of given number is:${number1}*${number2}*${number3} = ${number1 * number2 * number3}`);
    } 
    
console.log(netice);

//*! solution 2*************************************************/////

const number1 = +prompt('Please Enter a number1');
const number2 = +prompt('Please Enter a number2');
const number3 = +prompt('Please Enter a number3');
let largest;
if (number1 > number2 && number1 > number3){
    largest = number1;
} else if (number2 > number1 && number2 > number3){
    largest = number2;
} else {
    largest = number3;
}
console.log("the largest number is "+ largest);
