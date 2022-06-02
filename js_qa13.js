//?Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const taban = parseInt(prompt("enter a base"));
const yukseklik = parseInt(prompt("enter a height"));

function alan(taban, yukseklik) {
    const olc = (taban*yukseklik)/2
    return olc 
}

alan(`${taban}`,`${yukseklik}`)

//! second Solution with function expression

const taban = parseInt(prompt("enter a base"));
const yukseklik = parseInt(prompt("enter a height"));

const alan1 = function(taban, yukseklik) {
    return taban*yukseklik/2
} 

alan1(`${taban}`, `${yukseklik}`)

//! thirth Solution with Arrow function;

const taban = parseInt(prompt("enter a base"));
const yukseklik = parseInt(prompt("enter a height"));

const alan2 = (taban, yukseklik) => taban*yukseklik/2;
alan2(`${taban}`, `${yukseklik}`)
