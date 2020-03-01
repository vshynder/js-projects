const userChoice = prompt(
    "Выберите символ (1 - камень, 2 - ножницы, 3 - бумага)"
  );
  let score = 0;
  let computerChoise;
  if (userChoice === null) {
    alert(":(");
  } else {
    computerChoise = Number.parseInt(Math.random() * (3 - 1) + 1);
    alert(comparison(userChoice, computerChoise));
  }
  function comparison(userChoice, computerChoise) {
    const choicesNames = ["", "Камень", "Ножницы", "Бумага"];
    let result;
    if (computerChoise == userChoice) {
      result = "Ничья";
    }
    switch (userChoice) {
      case "1":
        if (computerChoise === 2) {
          result = "Вы победили!";
        }
        if (computerChoise === 3) {
          result = "Вы проиграли!";
        }
        break;
      case "2":
        if (computerChoise === 1) {
          result = "Вы проиграли!";
        }
        if (computerChoise === 3) {
          result = "Вы победили!";
        }
        break;
      case "3":
        if (computerChoise === 1) {
          result = "Вы победили!";
        }
        if (computerChoise === 2) {
          result = "Вы проиграли!";
        }
        break;
    }
    return (result += ` Вы выбрали ${choicesNames[userChoice]}, а компьютер выбрал ${choicesNames[computerChoise]}`);
  }  