

//business logic
function bedazzleNumberInput(userNumber) {

  let numberArray = [];

  for (let i = 0; i <= userNumber; i++) {
    console.log(i);
    let numberCount = i.toString();

    if ((numberCount).includes(['3'])) {
      numberArray.push("Won't you be my neighbor?"); //+= " "
    }
    else if ((numberCount).includes(['2'])) {
      numberArray.push("Boop!")
    }
    else if ((numberCount).includes(['1'])) {
      numberArray.push("Beep!")
    }
    else {
      numberArray.push(numberCount);
    }
  }
  return numberArray
}

// ui logic 

document.addEventListener("DOMContentLoaded", function () {
document.getElementById('formOne').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("its submitting")
  
  let numberInput = document.getElementById('userInput').value;
  let p = document.getElementById('generatedList');

  let result = bedazzleNumberInput(numberInput);
  p.innerText = result.join(", ");
  
});
});
