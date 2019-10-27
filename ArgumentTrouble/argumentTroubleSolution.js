function sum(firstNumber, secondNumber) {

  if (secondNumber === undefined) {
    return (secondNumber) => firstNumber + secondNumber;
  }
  
  return firstNumber + secondNumber;
}