//?Write a JavaScript exercise to get the extension of a filename

// salih.exe

const extension = String(prompt('please enter a filename with extension'))

let index = extension.lastIndexOf('.');  //! lastIndexOf method gives us lat element index of inner parenthesis 
let before = extension.slice(0, index); //! slice method gives us from index to index all element of variables 
console.log(before);


//! get extension
let getExtension = extension.split('.').pop(); //! split method gives us split the elmenet with inner parenthesis of variable and pop gives us last element of array 


