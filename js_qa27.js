//? Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//! return statement only used inside function;

const n1 = parseInt(prompt("enter a number for n1"));
const n2 = parseInt(prompt("enter a number for n2"));
function sum (n1, n2) {
    if (n1 === 50 || n2 === 50) {
        return true;
    } else if (n1 + n2 === 50) {
        return true;
    } else {
        return (n1 + n2);
    };

};

sum(n1, n2);  //! you need to write this block 
