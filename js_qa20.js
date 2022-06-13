
let number =Math.floor(Math.random() *11);   //! its convert to whole number otherwise return float number;
let getNumber = parseInt(prompt("Enter a number between 0 and 10"))

function guessNumber(){
     if (getNumber < 0 || getNumber > 10){
        console.log("the number you entered is not a deserve number")
     } else if (getNumber === number){
        console.log("great your guessing is true");
     } else{
        console.log("the number you entered is false, the number was "+ number );
     }
};

guessNumber(getNumber);


//! Math.floor(Math.random() * 10) + 1 => returns a random number integer 1 to 10

//! Math.floor(Math.random() *11 => returns a random number integer 0 to 10;

//! function getRdnInteger(min,max){
//!     return Math.floor(Math.random() * (max - min)) + min;
//! } => always retuns a random number between min (included) and max(excluded)


//! function getRndInteger(min, max) {
//!   return Math.floor(Math.random() * (max - min + 1) ) + min;
//! }  = > both min and max included


