//?  Write a JavaScript program to get the website URL (loading page)

https://www.sporx.com/konyaspor-ve-basaksehir-in-rakipleri-belli-oldu-SXHBQ977368SXQ

https://www.sporx.com/

const name1 = prompt("please enter the name you want to get the website URL")

function getUrl(name1) {
    console.log("http://www." + `${name1}`+".com")
};

getUrl(name1)