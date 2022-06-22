//? Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

//! quick information what is substring function 
//! text "hello" text.subdtring(1,4) gives us ell from 1 to 4 but four not include





// const oldstr = prompt("give me a string")
// const var = prompt("how we split function")

// function removeString(oldstr){
//    console.log(oldstr.split(`${var}`).join(''));
// }

//! first solution 

let str = "test_25";

//!1

str.split("_").pop();

console.log(str)

//!2
str.substring(str.length-2)

//!3
str.replace("test", "");

//! second solution;

function frontBack(str) {
    first = str.substring(0,1);
    return first + str + first
}

console.log(frontBack("str"));


