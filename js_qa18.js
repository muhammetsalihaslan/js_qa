const givenYear = parseInt(prompt("Enter a year you are wondering if it is a leap year"))

function leapYear(year) {
   if (year%100 === 0  && year%400 === 0){
      console.log("year entered is leap year")
   } else if (year%4 === 0){
      console.log("year entered is leap year")
   } else {
      console.log("year entered is not a leap year")
   }
};

leapYear(givenYear);


//! solution 2

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
} => //! if year divisible by 100  and also year divisible by 400 however if year not divisible by 100 in this case for leap year, year must be divisible by 4 => 
      //**this is explanation of ternary function

