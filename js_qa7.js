//*?Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır

//! F = 1.8C + 32 // C = (F-32)/1.8

let converter = prompt("Which degree type you want to other Fahrenheit or celsius");
if (converter == "Fahrenheit"){
    const degree = prompt("what degree of Fahrenheit")
    let celsius = 0;
    celsius = (`${degree-32}`/1.8)
    console.log(celsius);
    
} else {
    const degree1 = prompt("what degree of celsius")
    let Fahrenheit = 0;
    Fahrenheit =(`${degree1}`*1.8+32);
    console.log(Fahrenheit);
};