//? Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.

const monthsOrder = prompt("write the month you are in")
switch (monthsOrder) {
    case "January":
        order = "you are in the 1. month";
        break
    case "February":
        order = "you are in the 2. month";
        break
    case "March":
        order = "you are in the 3. month";
        break
    case "April":
        order = "you are in the 4. month";
        break
    case "May":
        order = "you are in the 5. month";
        break
    case "June":
        order = "you are in the 6. month";
        break
    case "July":
        order = "you are in the 7. month";
        break
    case "August":
        order = "you are in the 8. month";
        break
    case "September":
        order = "you are in the 9. month";
        break
    case "October":
        order = "you are in the 10. month";
        break
    case "November":
        order = "you are in the 11. month";
        break
    case "December":
        order = "you are in the 12. month";
        break
}

console.log(order);