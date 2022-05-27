///*********question with forEach******/
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach((deger,indis,dizi) => {
    dizi[indis] = deger + deger*1/10
});
console.log(fiyatlar);