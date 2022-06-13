
let number =Math.floor(Math.random() *10);   //! its convert to whole number otherwise return float number;
let getNumber = parseInt(prompt("Enter a number between 0 and 10"))

function guessNumber(){
     if (getNumber < 0 && getNumber > 10){
        console.log("the number you entered is not a deserve number")
     } else if (getNumber === number){
        console.log("great the you guessing is true");
     } else{
        console.log("the number you entered is false");
     }
};

guessNumber(getNumber);