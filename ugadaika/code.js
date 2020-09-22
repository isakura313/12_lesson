// нам нужно получить значения из input
// перед этим нам нужно загадать случайное число от 1 до 30
// если - то что ввел пользователь больше рандома, сказать взять меньше
// и наоборот
// если угадал - поздравить
// после 5 попыток, сказать, что проиграл
let input = document.querySelector("input");
let button = document.querySelector("button");
let tablo = document.getElementById("tablo")
let amount = document.getElementById("amount")
let count = 0;

let rand = Math.ceil(Math.random() * 30);
console.log(rand);
amount.textContent = "Остаток попыток "+ (4-count);

button.onclick = function () {
  let data = Number(input.value);
  check(data);
};

document.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        let data = Number(input.value);
        check(data);
    }
})

function check(n) {
  if (n === rand) {
    tablo.textContent = "Вы выйграли!";
    let result = confirm(" Выйграли!! Хочешь сыграть еще?"); // confirm - подтверждение действия

    if (result) {
      window.location.reload();
    }

    // предложить пользователю сыграть еще
  } else if (count == 4) {
    tablo.textContent ="Вы проиграли!";

    let result = confirm("Проиграли(( Хочешь сыграть еще?");
    if (result) {
      window.location.reload();  // перезагрузка страницы
    }

  } else if (n > rand) {
    tablo.textContent ="Возьми поменьше!";
    count += 1;
    amount.textContent = "Остаток попыток "+ (4 - count);
    input.value = ''
    //очищение input

  } else if (n < rand) {
    tablo.textContent ="Возьми побольше!";
    count += 1;
    amount.textContent = "Остаток попыток "+ (4 - count);
    input.value = '' //очищение input
  }
}
