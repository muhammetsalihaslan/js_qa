//?Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

for(let year = 2014; year <= 2050; year++) {
    let time = new Date(year, 0 ,1);
    if (time.getDay() === 0) {
        console.log("1st January is being a Sunday in " + year);
    }
}

console.log(year)


//!! new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);


//   Method	            Description
// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours() 	        Get the hour (0-23)
// getMinutes()	    Get the minute (0-59)
// getSeconds()	    Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	        Get the weekday as a number (0-6)
// Date.now()	        Get the time. ECMAScript 5.
