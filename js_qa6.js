//**?Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternarydeyimi ile yapınız).

const number = +prompt('Please Enter a number');

const oddeven = number % 2 == 0 ? `number is even`: `number is odd`;
console.log(oddeven);