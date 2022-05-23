//? Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız. 0-25 arası not karşılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-90 arası BA, 91-100 arası AA olarak çevrilmelidir. 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir

const degree1 = Number(prompt("Please enter the exam grade"));
let final;
if (degree1 < 0 || degree1 > 100) {
    console.log("Please enter valid number")
} else if(degree1 < 26){
   final = (`Your letter is FF`);
} else if (degree1 < 46){
    final = (`Your letter is DD`);
} else if (degree1 < 66){
    final = (`Your letter is CC`);
} else if (degree1 < 76){
    final = (`Your letter is BB`);
} else if (degree1 < 91){
    final = (`Your letter is BA`)
} else if (degree1 < 101){
    final = (`Your letter is AA`)
}