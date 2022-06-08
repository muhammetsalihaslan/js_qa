//? get time and date function 

let today = new Date();
let day = today.getDay(); //! numeric day of week 
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let year = today.getFullYear(); //! full year 
let month = today.getMonth() + 1; //! month (+1 because of month of year start with 0 )
let day2 = today.getDate(); //! numeric day of month

console.log("today is "+ daylist[day] + ".");

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

