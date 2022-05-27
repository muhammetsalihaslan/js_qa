//*fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

const fiyatlar = [85,90,50,60,25,87,110,150,180,170,13,81];

const buyukler = fiyatlar.filter((fiyat)=> fiyat > 90);
console.log(buyukler);
//*! seçmek sözkonusu olduğunda filter metodu kullanılır

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const artıs = fiyatlar.filter((kfiyat) => kfiyat < 110).map((afiyat) => (afiyat*1.1).toFixed(2));