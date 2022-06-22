//? Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const string = prompt("enter something").toLowerCase();

if (string.startsWith("py")) {
    console.log(string);
} else{
    let result = "py"+ string;
    console.log(result)
};


