/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
const decimalToBinary = function (number) {
  let result = "";
  let currentNumber = number;
  if (number === 0) {
    return "0"
  }
  if (!Number.isInteger(number)) {
    return false;
  }
  while (currentNumber > 0) {
    let rest = currentNumber % 2;
    result = rest + result;
    currentNumber = Math.floor(currentNumber / 2);
  }
  return result;
};
decimalToBinary()

module.exports = decimalToBinary