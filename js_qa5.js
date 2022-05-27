//*fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

const fiyatlar = [85,90,50,60,25,87,110,150,180,170,13,81];

const buyukler = fiyatlar.filter((fiyat)=> fiyat > 90);
console.log(buyukler);
//*! seçmek sözkonusu olduğunda filter metodu kullanılır

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const artıs = fiyatlar.filter((kfiyat) => kfiyat < 110).map((afiyat) => (afiyat*1.1).toFixed(2));


const maaslar = [3000, 5000, 4000, 6000, 6500];

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

const zam = maaslar.filter((dusuk) => dusuk <= 4000).map((yzam) => yzam*1.5);
console.log(zam); //*  [4500, 6000]

const zam2 = maaslar.filter((yuksek) => yuksek > 4000).map((xzam) => xzam*1.25);
console.log(zam2);//*[6250, 7500, 8125]