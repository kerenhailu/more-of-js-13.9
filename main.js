// var arrayAB = ["keren","sapir","gila","eden","yafit","tikva"]
// console.log(arrayAB.sort());
// document.write(arrayAB.sort())

// var city = ["yahod" , "ashdod" , "lod" , "ramle"]
// console.log(city.sort());
// document.write(city.sort())

// הפןנציה ממיינת בסדר אלפה בתי ורק מספרים חד ספרתיים

// var num = [3,1,9,4,2,7]
// console.log(num.sort());
// document.write(num.sort())

// var bigNum =  [30,1,13,40,2,7,51,23]
// אנחנו עושים את המספר הראשון פחות המספר השני
// אם זה יוצא מינוס מספר כלשהו אז זה נותן לי את המספר השני שנתנו לו
// והSORT עצמו מוציא לנו מאחורי הקלעים את המספר הקטן ביותר וככה
// הוא עובר על כל המערך ויוצא לנו מערך ממויון
// סדר עולה
// bigNum.sort(function(a, b){return a-b})
// console.log(bigNum);
// document.write(bigNum)

// סדר יורד
// bigNum.sort(function(a, b){return b-a})
// console.log(bigNum);
// document.write(bigNum)

// מערך שמסודר לפי המחירים בסדר עולה
// var Products =[{name:"aaa" , price:40},{name:"bbb" , price:100},{name:"ccc" , price:80}]
// Products.sort(lowPrice)
// function lowPrice(a,b){
// return a.price- b.price
// }console.log(Products)

// var str=["keren","sapir","gila","eden","yafit","tikva"]
// str.reverse()
// חייב להדפיס את זה באוטומט ישר עם הלוג או להגדיר משתנה ואז להתפי את המשתנה
// איך שרשמתי 2 שורות למטה זה לא יעבוד
// str.toString()
// console.log(str);

// ככה זה עובד:
// console.log(str.toString());

// var numbers=[1,2,3,4,5,6]
// numbers.reverse()
// console.log(numbers);

// להמיר מערך לסטרינג
// var toStr =["keren" , "hailu" , "22"]
// console.log(toStr.toString());

// להמיר מערך לסטרינג ויש גם אפשרות לשנות את הפסיקים במערך
// נכתוב בתוך הסוגריים בתוך סטרינג את מה שנרצה לשנות לדוג:
// אם בסוגרים לא נכתוב כלןם זה יהיה בדיוק כמו tostring
// console.log(toStr.join());
// console.log(toStr.join(" "));
// console.log(toStr.join(" #"));

// var fruits=["Banana" ,"watermelon" , "peach" , "Apple" ,"orange"]
// console.log(fruits.sort());
// fruits.reverse()
// console.log(fruits);

// דרך קצרה יותר
// console.log(fruits.sort().reverse());

// שיעורים
var cars = [
  { price: 200, year: 2010, degam: "mazda" },
  { price: 300, year: 2012, degam: "honda" },
  { price: 500, year: 2015, degam: "gfb" },
];

// הדפס את המערך מסודר מהזול ליקר

// cars.sort(priceAll)
// function priceAll(a,b){
// return a.price-b.price
// }
// console.log(cars);

// הדפס את המערך מסודר מהישן לחדש - בדוק מיון לפי תאריך

// cars.sort(old)
// function old(a,b){
//     return a.year-b.year
// }
// console.log(cars);

// כפתור אחד מציג את הרכבים מהיקר לזול
btnCheap.onclick = () => {
  cars.sort(priceAll);
  function priceAll(a, b) {
    return a.price - b.price;
  }
  for (let i = 0; i < cars.length; i++) {
    document.write(`${cars[i].price} ${cars[i].year} ${cars[i].degam}<br>`);
  }
};

// כפתור אחד מציג את הרכבים מהזול ליקר
btnExpensive.onclick = () => {
  cars.sort(priceAll);
  function priceAll(a, b) {
    return b.price - a.price;
  }
  for (let i = 0; i < cars.length; i++) {
    document.write(`${cars[i].price} ${cars[i].year} ${cars[i].degam}<br>`);
  }
};
//   פתור אחד מציג את הרכבים לפי סדר אלפביתי
btnAB.onclick = () => {
  cars.sort(ABCD);
  function ABCD(a, b) {
    return a.degam - b.degam;
  }
  for (let i = 0; i < cars.length; i++) {
    document.write(`${cars[i].price} ${cars[i].year} ${cars[i].degam}<br>`);
  }
};
//   כפתור אחד מציג את הרכבים מהישן לחדש
btnOldNew.onclick = () => {
  cars.sort(old);
  function old(a, b) {
    return a.year - b.year;
  }
  for (let i = 0; i < cars.length; i++) {
    document.write(`${cars[i].price} ${cars[i].year} ${cars[i].degam}<br>`);
  }
};
