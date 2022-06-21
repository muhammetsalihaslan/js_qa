//? Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const string = prompt("enter something");

if (string.startsWith("Py")) {
    console.log(string);
} else{
    let result = string.split("");
    result.unshift("Py");
    result.join("");
    console.log(result);
}
