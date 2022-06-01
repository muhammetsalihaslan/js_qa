//**Bir sayıyı parametre olarak alan ve bu sayının tek veya çift olduğunu hesaplayıp sonucu ana programa döndüren fonksiyonu yazınız

const number = parseInt(prompt("please enter a number"))

function tekCift (number){
    if (number % 2 == 0){
        console.log(`the ${number} is even`);
    } else{
        console.log(`the ${number} is odd`);
    }
}

tekCift(number);