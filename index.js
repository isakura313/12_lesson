let str = "asfasdfasdfszdfszd"
// Теперь нам нужно превратить это в число

//первый вариант - +
// второй вариант - Number
let n = Number(str);
console.log(typeof(n)) // console.log - вывод в консоль просто
if(isNaN(n)){
    console.log("ты чего набираешь?")
}
console.log(n) //NaN - потому что не число, но имеет числовой тип
//давайте посмотрим на баги
console.log(0.1 + 0.2)