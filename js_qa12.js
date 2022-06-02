//? Bir dairenin alanını hesaplayan fonksiyonu arrow fonksiyon olarak yazınız. Yarıçap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.

const r = parseInt(prompt("please enter r"))

const alanDaire = (r) => Math.PI*r*r;
console.log(alanDaire(`${r}`));


//? Doğum tarihini parametre olarak alan ve ana programa yaşı hesaplayıp döndüren fonksiyonu yazınız

const dogumTarihi = parseInt(prompt("please enter birth date"))

const yas = (dogumTarihi) => new Date().getFullYear() - dogumTarihi

console.log(yas(`${dogumTarihi}`));  //*yas(`${dogumTarihi}`) şelinde de yazılabilir



