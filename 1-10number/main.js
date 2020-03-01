let userNumber;
let computerNumber;
let result;
let userCounter = 0;
let computerCounter = 0;

do {
  userNumber = prompt("Введите число от 1 до 10!");
  computerNumber = Number.parseInt(Math.random() * (10 - 1) + 1);
  if (userNumber === null) {
    if (userCounter === 0 && computerCounter === 0) {
      alert("Game over :(");
      break;
    } else {
      alert(`Общий счёт: Вы - ${userCounter}, компьютер - ${computerCounter}.`);
      break;
    }
  } else {
    if (Number.isNaN(Number(userNumber))) {
      alert("Print a number please!");
    } else {
      if (userNumber >= 1 && userNumber <= 10) {
        if (userNumber == computerNumber) {
          result = "Вы победили! ";
          userCounter++;
        } else {
          result = "Вы проиграли! ";
          computerCounter++;
        }
      } else {
        alert("Ваше число не подходит, пожалуйста, выберите другое!");
      }
    }
  }
  if (userNumber >= 1 && userNumber <= 10) {
    alert(
      (result += `Вы выбрали ${userNumber}, а компьютер выбрал ${computerNumber}.`)
    );
  }
} while (userNumber !== null);
