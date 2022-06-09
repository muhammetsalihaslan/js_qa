//? Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let words = "w3resource"

function reverserOfWords(str) {
    let splitString = str.split(""); //! inside of split parentheses i can split any number, words or anything of the string
    let reverseArray = splitString.reverse();//! reverse the array function from coma
    let newArray = reverseArray.join("");//! I can add any number, word or anything I want inside the join parenthesis.
    return newArray;
}

reverserOfWords("w3resource");