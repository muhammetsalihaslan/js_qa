//? Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const string = prompt("enter something").toLowerCase();

if (string.startsWith("py")) {
    console.log(string);
} else{
    let result = "py"+ string;
    console.log(result)
};


//! SOLUTİON2

const string = prompt("enter something");

if (string.startsWith("Py")) {
    console.log(string);
} else{
    let result = string.split("");
    result.unshift("Py");
    result.join("");
    console.log(result);
};  //! it gives us an error in join("") part but its description like this first of all i use split function with ("") to convert string to array after that use unshift to add py inside to array but this add will be firt element of array and than use join("") function to convert array to string and finish 
