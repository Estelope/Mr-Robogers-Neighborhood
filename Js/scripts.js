
function bedazzleNumberInput(userNumber) {
  let numberArray = [];

  for (let i = 0; i <= userNumber; i++) {
    console.log(i);
    let numberCount = i.toString();

    if ((numberCount).includes(['3'])) {
      numberArray.push("'Won't you be my neighbor?'"); //+= " "
    }
    else if((numberCount).includes(['2'])) {
      numberArray.push("Boop!")
    }
    else if((numberCount).includes(['1'])) {
      numberArray.push("Beep!")
    }
    else {
      numberArray.push(numberCount) + ' ';
    }

  }
  return numberArray

}







