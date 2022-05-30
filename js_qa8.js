//?Write a program that queries whether the number entered from outside is prime.

const sayı = +prompt('Please Enter a number in your mind');
const asalMi = (sayı) => {
    let asal = true;
    for (let i = 2; i <sayı ; i++){
        if(sayı%i === 0){
            asal = false;
            break
        }
    }
    return asal ? "ASAL": "ASAL DEĞİL";
}
console.log(`${sayı}${asalMi(sayı)}`);