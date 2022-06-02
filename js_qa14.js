//?kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

const deger1 = parseInt(prompt("karesi alnıcak değeri giriniz"));
const deger2 = parseInt(prompt("küpü alnıcak değeri giriniz"));
const deger3 = parseInt(prompt("istediğiniz üssü alınacak değeri giriniz"));
const deger4 = parseInt(prompt("üssü giriniz"))

const kareAl = (deger1) => deger1**2;
console.log(kareAl(`${deger1}`));

const küpAl = (deger2) => deger2**3;
console.log(küpAl(`${deger2}`)); 


const üsAl = (deger3, deger4) => {
    const üs = deger3**deger4
    return üs;
}
üsAl(`${deger3}`, `${deger4}`);